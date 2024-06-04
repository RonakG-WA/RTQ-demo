import React, { ChangeEvent } from 'react'
import { textProps } from './textProps'
import { TextField } from '@mui/material'

const TextFieldComponent :React.FC<textProps> = (props) => {
  return (
    <>
      <TextField
            label={props.label}
            variant={props.variant}
            value={props.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e)}
            margin={props.margin}
            fullWidth
          />
    </>
  )
}

export default TextFieldComponent
