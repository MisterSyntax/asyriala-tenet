import * as React from 'react';

/** Design System Components */
import { Paper, Typography } from '@mui/material';
import Box from '@mui/system/Box';

/** Components */

/** Types */
import { TooltipProps } from 'recharts';

/** Actions */

/** Selectors */
export function SavingsTooltip ({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <Paper sx={{ padding: '0 8px', color: 'success.main' }}>
      <Typography>
        <Typography component='b' sx={{ fontWeight: 'bold' }} >Savings:</Typography>
        {` $${payload[0].value}`}
      </Typography>
    </Paper>
  );
}

export default SavingsTooltip;