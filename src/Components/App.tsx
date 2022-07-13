import * as React from 'react';
/** Design System Components */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

/** Components */
import AppBar from './Layout/AppBar/AppBar';
import SustainableSavings from './Features/SustainableSavings/SustainableSavings';
import Footer from './Layout/Footer/Footer';

/** Types */

/** Actions */

/** Selectors */

interface IAppProps {
}

export function App (props: IAppProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <AppBar />
      <Container sx={{ flexGrow: 1, mb: 2 }} maxWidth='md'> 
        <Box
          component='main'
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            mt: 3,
            minHeight: '100%',
            width: '100%',
          }}
        >
          <SustainableSavings />
        </Box>
      </Container>
      {<Footer />}
    </Box>
  );
}

export default App;
