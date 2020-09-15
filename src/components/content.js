import React, { createElement, useEffect, useMemo, useState } from 'react';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import Doc from 'unified-doc';
import { v4 as uuidv4 } from 'uuid';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { Button, Card, Checkbox, FileInput, Flex, Textarea } from './ui';

const contentStyles = {
  overflow: 'auto',
  mozTabSize: '2',
  scrollbarWidth: 'thin',
  tabSize: '2',
  whiteSpace: 'pre-wrap',
};

export default function Content({ content, selectedWord, onUpdate }) {
  const [draftContent, setDraftContent] = useState(content);
  const [filename, setFilename] = useState('doc.html');
  const [showPreview, setShowPreview] = useState(false);

  const doc = useMemo(() => {
    let marks = [];
    if (selectedWord) {
      marks = Doc({ content, filename })
        .search(selectedWord)
        .map((result) => ({
          ...result,
          id: uuidv4(),
        }));
    }

    return Doc({
      compiler: [[rehype2react, { createElement }]],
      content,
      filename,
      marks,
      prePlugins: [[highlight, { ignoreMissing: true }]],
      sanitizeSchema: null,
    });
  }, [content, filename, selectedWord]);

  useEffect(() => {
    setShowPreview(true);
  }, [selectedWord]);

  function handleUploadFile(file) {
    file.text().then((fileContent) => {
      setDraftContent(fileContent);
      setFilename(file.name);
      onUpdate(fileContent);
    });
  }

  function handleResetContent() {
    setDraftContent(content);
  }

  function handleUpdateContent() {
    onUpdate(draftContent);
  }

  const disabled = draftContent === content;

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="space-between">
        <Checkbox
          id="preview"
          label="Preview"
          value={showPreview}
          onChange={setShowPreview}
        />
        <Flex>
          <Button
            disabled={disabled}
            variant="secondary"
            onClick={handleResetContent}>
            Reset
          </Button>
          <Button disabled={disabled} onClick={handleUpdateContent}>
            Update
          </Button>
        </Flex>
      </Flex>
      <FileInput
        id="upload-file"
        label="Upload File"
        onChange={handleUploadFile}
      />
      {showPreview ? (
        <Card sx={contentStyles}>{doc.compile().result}</Card>
      ) : (
        <Textarea
          rows={50}
          sx={contentStyles}
          value={draftContent}
          onChange={setDraftContent}
        />
      )}
    </Flex>
  );
}
