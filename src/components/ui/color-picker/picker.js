import React, { useRef } from 'react';
import { SketchPicker } from 'react-color';

import Card from '../card';
import Button from '../button';
import Flex from '../flex';

import { useClickOutside } from '../../../hooks';

export default function Picker({ color, onHide, onRemove, onUpdate }) {
  const pickerRef = useRef();

  useClickOutside(pickerRef, onHide);

  return (
    <Card ref={pickerRef}>
      <Flex flexDirection="column">
        <SketchPicker
          color={color}
          onChangeComplete={(updatedColor) => {
            onUpdate(updatedColor.hex);
            onHide();
          }}
        />
        <Button
          variant="secondary"
          onClick={() => {
            onRemove();
            onHide();
          }}>
          Remove color
        </Button>
      </Flex>
    </Card>
  );
}
