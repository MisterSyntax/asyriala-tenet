import * as React from 'react';

/** Design System Components */
import AppBar from '@mui/material/AppBar';
import SvgIcon from '@mui/material/SvgIcon';

/** Components */

/** Types */

interface IAppProps {
}

export const TenetIcon = () => (
  <SvgIcon sx={{width: 48, height:48}}>
    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M28.791 26.633a.355.355 0 00.605-.25V13.118c0-.585.476-1.059 1.063-1.059h2.686c.316 0 .474-.38.251-.603L27.228 5.31a1.065 1.065 0 00-.751-.31H7.938a.353.353 0 00-.25.603l6.167 6.146c.2.198.47.31.752.31h6.643c.587 0 1.063.474 1.063 1.059v6.62c0 .281.111.55.311.749zM5.209 7.367a.355.355 0 00-.605.25v13.265a1.06 1.06 0 01-1.062 1.059H.855a.353.353 0 00-.251.603l6.168 6.146c.199.198.47.31.751.31h18.539c.315 0 .473-.38.25-.602l-6.167-6.147a1.07 1.07 0 00-.752-.31H12.75a1.061 1.061 0 01-1.063-1.059v-6.62c0-.281-.111-.55-.311-.749z" fillRule="nonzero"></path>
    </svg>
  </SvgIcon>
);

export function App (props: IAppProps) {
  return (
    <AppBar position="static" sx={{ p:1, backgroundColor: 'success.light' }} >
      <TenetIcon />
    </AppBar>
  );
}

export default App;
