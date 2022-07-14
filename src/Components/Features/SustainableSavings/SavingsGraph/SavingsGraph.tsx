import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'appState/redux-hooks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/** Design System Components */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** Components */
import SavingsTooltip from './SavingsTooltip/SavingsTooltip';

/** Types */

/** Actions */

/** Selectors */
import { getTripSavingsDataForCarId } from 'appState/trips/trips.selectors';
import { getActiveVehicle } from 'appState/features/vehicleSelect/vehicleSelect.selectors';

interface ISavingsGraphProps {
}

export function SavingsGraph (props: ISavingsGraphProps) {
  const theme = useTheme();
  const activeVehicle = useAppSelector(getActiveVehicle);
  const data = useAppSelector(state => getTripSavingsDataForCarId(state, activeVehicle));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 300}}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Monthly Savings
      </Typography>
      <ResponsiveContainer>
        <BarChart width={730} height={300} data={data.map(curr => ({ month: curr.month, savings: `${curr.savings.toFixed(2)}` }))}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<SavingsTooltip/>} />
          <Bar dataKey="savings" fill={theme.palette.primary.light} />
        </BarChart>
      </ResponsiveContainer>
      <Typography variant='body2'>Savings are calculated compared to a 2019 Audi Q7, and assume trips shorter than the vehicles electric range</Typography>
    </Box>
  );
}

export default SavingsGraph;
