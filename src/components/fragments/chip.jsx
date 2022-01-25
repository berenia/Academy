import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { getThemeProps } from '@mui/system';

export const ChipLabel = () => {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}

export const ClickableLinkChips = () => {
  return (
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
  );
}
export const OutlinedClickableLinkChips = ({text}) => {
  return (
 
      <Chip
        label={text}
        component="a"
        href="#basic-chip"
        variant="outlined"
        style={{margin: '5px', borderRadius: '4px'}}
        clickable
      />
  
  );
}