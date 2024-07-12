import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  const renderDetails = (
    // <Grid2 spacing={3} xs={3} md={3} lg={12}>
    <Stack
      spacing={2}
      alignItems="flex-end"
      sx={{ p: 3, textAlign: 'right', typography: 'body2' }}
    >
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>ID</Box>
        <Box sx={{ width: 160, typography: 'subtitle2' }}>123456</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>External ID</Box>
        <Box sx={{ width: 160 }}>123456</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Purpose</Box>
        <Box sx={{ width: 160 }}>Bhelley best purpose</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Type</Box>
        <Box sx={{ width: 160 }}>Bhelli type</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Usage Type</Box>
        <Box sx={{ width: 160 }}>Bhelli Usage Type</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>System Dropdown</Box>
        <Box sx={{ width: 160 }}>Is it a system one?</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Simple Values</Box>
        <Box sx={{ width: 160 }}>holy cow, holy moly</Box>
      </Stack>
    </Stack>
    // </Grid2>
  );
  return (
    <div>
      {renderDetails}
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack direction="row">
          <Box sx={{ color: 'text.secondary' }}>ID</Box>
          <Box sx={{ width: 160, typography: 'subtitle2' }}>123456</Box>
        </Stack>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
