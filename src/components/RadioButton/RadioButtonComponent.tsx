// CustomRadioGroup.tsx
import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { radioProps } from './radioProps';

const CustomRadioGroup: React.FC<radioProps> = (props) => {
  return (
    <RadioGroup row value={props.value} onChange={props.onChange}>
      {props.options.map(option => (
        <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
