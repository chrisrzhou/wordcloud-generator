import React, { useRef } from 'react';

import Box from './box';
import Button from './button';
import Flex from './flex';
import Card from './card';
import Text from './text';

import { useDisableDocumentScroll, useEscape } from '../../hooks';

export default function Modal({
  children,
  disabled,
  shown,
  submitText,
  title,
  onHide,
  onSubmit,
}) {
  const modalRef = useRef();

  function handleHide() {
    if (shown) {
      onHide();
    }
  }

  useDisableDocumentScroll(shown);
  useEscape(handleHide);

  if (!shown) {
    return null;
  }

  return (
    <Box
      bg="backdrop"
      sx={{
        bottom: 0,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 'modal',
      }}>
      <Flex
        ref={modalRef}
        p={4}
        sx={{
          height: 'calc(80vh)',
          overflow: 'hidden',
          transform: 'translateY(10vh)',
        }}>
        <Card
          mx="auto"
          sx={{ height: '100%', flex: '1 1 auto', maxWidth: 840 }}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            sx={{ height: '100%' }}>
            <Text as="h2">{title}</Text>
            <Box
              sx={{
                flex: '1 1 auto',
                overflow: 'auto',
                scrollbarWidth: 'thin',
              }}>
              {children}
            </Box>
            <Flex justifyContent="flex-end">
              <Button variant="secondary" onClick={onHide}>
                Cancel
              </Button>
              <Button disabled={disabled} onClick={onSubmit}>
                {submitText}
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
