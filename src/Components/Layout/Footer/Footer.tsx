import * as React from 'react';

/** Design System Components */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/** Components */

/** Types */

export  function Footer () {
  return (
    <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            {`Andrew Syriala |  `}
            <Link href='mailto:asyriala@gmail.com' sx={{ color: 'primary.dark' }}>
              asyriala@gmail.com
            </Link>
            {` | (339)933-0509`}
          </Typography>
        </Container>
      </Box>
  );
}

export default Footer;
