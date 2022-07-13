import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'appState/redux-hooks';

/** Design System Components */
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

/** Components */
import VehicleSelect from './VehicleSelect/VehicleSelect';

/** Types */

/** Actions */
import { fetchCars } from 'appState/cars/cars.slice';
import { fetchTrips } from 'appState/trips/trips.slice';
import { fetchCosts } from 'appState/costs/costs.slice';
import SavingsGraph from './SavingsGraph/SavingsGraph';
import TotalSavings from './TotalSavings/TotalSavings';
import { Typography } from '@mui/material';

/** Selectors */

interface ISustainableSavingsProps {
}

export function SustainableSavings (props: ISustainableSavingsProps) {
  const dispatch = useAppDispatch();
  const [isAppLoaded, setIsAppLoaded] = React.useState(false);

  React.useEffect(() => {
    async function fetchAppData() {
      if(!isAppLoaded) {
        await Promise.all([
          dispatch(fetchCars()),
          dispatch(fetchTrips()),
          dispatch(fetchCosts())
        ]);
        setIsAppLoaded(true);
      }
    }
    fetchAppData();
  }, [dispatch, isAppLoaded]);

  if(!isAppLoaded) {
    return (
      <Box>
        <Typography variant='h2' component='h1'>Sustainable Savings</Typography>
        <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <Typography variant='h2' component='h1'>Sustainable Savings</Typography>
      <Grid item xs={12}>
        <VehicleSelect />
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <SavingsGraph />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <TotalSavings />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SustainableSavings;
