import React, { useState } from 'react';

import {
  Button,
  Checkbox,
  ColorPicker,
  Flex,
  Input,
  Section,
  Select,
  Slider,
  Modal,
} from './ui';

const inputWidth = 300;

const scaleOptions = [
  { value: 'linear', label: 'linear' },
  { value: 'log', label: 'log' },
  { value: 'sqrt', label: 'sqrt' },
];

const spiralOptions = [
  { value: 'archimedean', label: 'archimedean' },
  { value: 'rectangular', label: 'rectangular' },
];

const stemmerOptions = [
  { value: null, label: 'None' },
  { value: 'porter', label: 'Porter' },
  { value: 'lancaster', label: 'Lancaster' },
];

export default function Settings({ settings, onApply }) {
  const [showSettings, setShowSettings] = useState(false);
  const [draftSettings, setDraftSettings] = useState(settings);

  function handleShowSettings() {
    setShowSettings(true);
  }

  function handleUpdateSettings(type, key, value) {
    const updatedSettings = {
      ...draftSettings,
      [type]: {
        ...draftSettings[type],
        [key]: value,
      },
    };
    setDraftSettings(updatedSettings);
  }

  function handleApplySettings() {
    onApply(draftSettings);
    setShowSettings(false);
  }

  function handleCancel() {
    setDraftSettings(settings);
    setShowSettings(false);
  }

  const {
    allowNumbers,
    maxWords,
    stemmer,
    stopwordsInput,
  } = draftSettings.content;
  const {
    colors,
    fontFamily,
    fontSizes,
    padding,
    rotations,
    rotationAngles,
    spiral,
    scale,
    transitionDuration,
  } = draftSettings.wordcloud;
  const isRotationsProvided = Number.isInteger(rotations);
  const minFontSize = fontSizes[0];
  const maxFontSize = fontSizes[1];
  const minRotationAngle = rotationAngles[0];
  const maxRotationAngle = rotationAngles[1];

  const disabled = JSON.stringify(draftSettings) === JSON.stringify(settings);

  const modal = (
    <Modal
      disabled={disabled}
      shown={showSettings}
      submitText="Apply"
      title="Settings"
      onHide={handleCancel}
      onSubmit={handleApplySettings}>
      <Section
        description="Configure visual properties of the wordcloud."
        title="Wordcloud">
        <Flex flexDirection="column">
          <ColorPicker
            id="colors"
            label="Colors"
            colors={colors}
            width={inputWidth}
            onUpdate={(updatedColors) => {
              handleUpdateSettings('wordcloud', 'colors', updatedColors);
            }}
          />
          <Input
            id="font-family"
            label="Font Family"
            type="text"
            value={fontFamily}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('wordcloud', 'fontFamily', value);
            }}
          />
          <Select
            id="scale"
            label="Word Scale"
            options={scaleOptions}
            value={scale}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('wordcloud', 'scale', value);
            }}
          />
          <Select
            id="spiral"
            label="Layout"
            options={spiralOptions}
            value={spiral}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('wordcloud', 'spiral', value);
            }}
          />
          <Checkbox
            id="random-rotations"
            label="Randomize Word Rotations"
            value={!isRotationsProvided}
            onChange={() => {
              handleUpdateSettings(
                'wordcloud',
                'rotations',
                isRotationsProvided ? undefined : 0,
              );
            }}
          />
          {isRotationsProvided && (
            <Slider
              id="rotations"
              label="Number of Word Rotations"
              max={30}
              min={0}
              type="number"
              value={rotations}
              width={inputWidth}
              onChange={(value) => {
                handleUpdateSettings('wordcloud', 'rotations', Number(value));
              }}
            />
          )}
          <Slider
            id="min-rotation-angle"
            label="Rotation Min Angle"
            min={-90}
            max={maxRotationAngle}
            unit="º"
            value={minRotationAngle}
            width={inputWidth}
            onChange={(value) => {
              const updatedRotationAngles = [Number(value), maxRotationAngle];
              handleUpdateSettings(
                'wordcloud',
                'rotationAngles',
                updatedRotationAngles,
              );
            }}
          />
          <Slider
            id="max-rotation-angle"
            label="Rotation Max Angle"
            min={minRotationAngle}
            max={90}
            unit="º"
            value={maxRotationAngle}
            width={inputWidth}
            onChange={(value) => {
              const updatedRotationAngles = [minRotationAngle, Number(value)];
              handleUpdateSettings(
                'wordcloud',
                'rotationAngles',
                updatedRotationAngles,
              );
            }}
          />
          <Slider
            id="min-font-size"
            label="Min Font Size"
            min={1}
            max={maxFontSize}
            unit="px"
            value={minFontSize}
            width={inputWidth}
            onChange={(value) => {
              const updatedFontSizes = [Number(value), maxFontSize];
              handleUpdateSettings('wordcloud', 'fontSizes', updatedFontSizes);
            }}
          />
          <Slider
            id="max-font-size"
            label="Max Font Size"
            min={minFontSize}
            max={100}
            unit="px"
            value={maxFontSize}
            width={inputWidth}
            onChange={(value) => {
              const updatedFontSizes = [minFontSize, Number(value)];
              handleUpdateSettings('wordcloud', 'fontSizes', updatedFontSizes);
            }}
          />
          <Slider
            id="word-padding"
            label="Word Padding"
            max={10}
            min={0}
            unit="px"
            value={padding}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('wordcloud', 'padding', value);
            }}
          />
        </Flex>
        <Slider
          id="transition-duration"
          label="Transition Duration"
          min={0}
          max={5000}
          step={100}
          unit="ms"
          value={transitionDuration}
          width={inputWidth}
          onChange={(value) => {
            handleUpdateSettings('wordcloud', 'transitionDuration', value);
          }}
        />
      </Section>
      <Section description="Control how to tokenize content." title="Content">
        <Flex flexDirection="column">
          <Checkbox
            id="allow-numbers"
            label="Allow Numbers"
            value={allowNumbers}
            onChange={(value) => {
              handleUpdateSettings('content', 'allowNumbers', value);
            }}
          />
          <Input
            id="max-words"
            label="Max words"
            max={1000}
            min={10}
            type="number"
            value={maxWords}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('content', 'maxWords', value);
            }}
          />
          <Input
            id="stopwords"
            label="Stopwords"
            placeholder="provide comma-separated stopwords"
            type="text"
            value={stopwordsInput}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('content', 'stopwordsInput', value);
            }}
          />
          <Select
            id="stemmer"
            label="Stemmer"
            options={stemmerOptions}
            value={stemmer}
            width={inputWidth}
            onChange={(value) => {
              handleUpdateSettings('content', 'stemmer', value);
            }}
          />
        </Flex>
      </Section>
    </Modal>
  );

  return (
    <>
      <Button variant="secondary" onClick={handleShowSettings}>
        Settings
      </Button>
      {modal}
    </>
  );
}
