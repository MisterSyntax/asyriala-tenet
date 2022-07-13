import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'appState/redux-hooks';

/** Design System Components */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** Components */

/** Types */

/** Actions */

/** Selectors */
import { getActiveVehicle } from 'appState/features/vehicleSelect/vehicleSelect.selectors';
import { getTotalSavingsForCarId } from 'appState/trips/trips.selectors';

interface ITotalSavingsProps {
}

export function TotalSavings (props: ITotalSavingsProps) {
  const activeVehicle = useAppSelector(getActiveVehicle);
  const totalSavings = useAppSelector(state => getTotalSavingsForCarId(state, activeVehicle));
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Annual Savings
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160}}>
        <Typography component="p" variant='h4' sx={{ fontWeight: 'bold', color: 'success.main'}}>
          ${totalSavings.toFixed(2)}
        </Typography>
      </Box>
    </>
  );
}

export default TotalSavings;
