import React from 'react';
import { Checkbox as ThemeUiCheckbox } from 'theme-ui';

import Label from './label';

export default function Checkbox({ id, label, value, onChange }) {
  return (
    <Label htmlFor={id} direction="row">
      <ThemeUiCheckbox
        id={id}
        checked={value}
        onChange={() => onChange(!value)}
      />
      {label}
    </Label>
  );
}
