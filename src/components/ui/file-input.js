import React from 'react';
import { Input as ThemeUiInput } from 'theme-ui';

import Label from './label';

export default function FileInput({ accept = undefined, id, label, onChange }) {
  return (
    <Label htmlFor={id}>
      {label}
      <ThemeUiInput
        accept={accept}
        id={id}
        sx={{ border: 'none' }}
        type="file"
        onChange={(event) => onChange(event.target.files[0])}
      />
    </Label>
  );
}
