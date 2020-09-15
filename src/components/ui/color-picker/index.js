import React, { useState } from 'react';

import ColorBox from './color-box';
import Picker from './picker';
import Box from '../box';
import Label from '../label';

export default function ColorPicker({
  id,
  label,
  colors = [],
  width,
  onUpdate,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);

  function handleHide() {
    setShowPicker(false);
  }

  function handleClearColors() {
    onUpdate([]);
  }

  function handleRemoveColor() {
    const updatedColors = colors.filter((_, index) => {
      return index !== selectedColorIndex;
    });
    onUpdate(updatedColors);
  }

  function handleUpdateColor(updatedColor) {
    const updatedColors =
      selectedColorIndex === colors.length
        ? [...colors, updatedColor]
        : colors.map((color, index) => {
            return index === selectedColorIndex ? updatedColor : color;
          });
    onUpdate(updatedColors);
  }

  function handlePickColor(index) {
    return () => {
      setShowPicker(true);
      setSelectedColorIndex(index);
    };
  }

  const picker = showPicker && selectedColorIndex !== null && (
    <Box sx={{ bottom: 0, right: 0 }}>
      <Picker
        color={colors[selectedColorIndex]}
        onHide={handleHide}
        onRemove={handleRemoveColor}
        onUpdate={handleUpdateColor}
      />
    </Box>
  );

  return (
    <Label htmlFor={id}>
      {label}
      <Box
        my={2}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          width,
        }}>
        {colors.map((color, index) => {
          return (
            <ColorBox
              key={color}
              color={color}
              onClick={handlePickColor(index)}
            />
          );
        })}
        <ColorBox
          color="muted"
          text="+"
          onClick={handlePickColor(colors.length)}
        />
        {colors.length > 0 && (
          <ColorBox color="muted" text="×" onClick={handleClearColors} />
        )}
      </Box>
      {picker}
    </Label>
  );
}
