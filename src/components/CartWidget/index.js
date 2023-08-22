import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">        
                <ShoppingCartIcon />
            </IconButton>
          </Box>
    </Stack>
  );
}