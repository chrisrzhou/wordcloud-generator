import React from 'react';
import { Textarea as ThemeUiTextarea } from 'theme-ui';

import Label from './label';

export default function Textarea({
  id,
  flex = undefined,
  label,
  rows = 16,
  value,
  onChange,
}) {
  return (
    <Label flex={flex} htmlFor={id} direction="column">
      {label}
      <ThemeUiTextarea
        id={id}
        rows={rows}
        sx={{ border: 'border' }}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Label>
  );
}
