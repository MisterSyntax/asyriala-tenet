import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'appState/redux-hooks';

/** Design System Components */
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/** Components */
import VehicleSelect from './VehicleSelect/VehicleSelect';

/** Types */

/** Actions */
import { fetchCars } from 'appState/cars/cars.slice';
import { fetchTrips } from 'appState/trips/trips.slice';
import { fetchCosts } from 'appState/costs/costs.slice';
import SavingsGraph from './SavingsGraph/SavingsGraph';
import TotalSavings from './TotalSavings/TotalSavings';

/** Selectors */

interface ISustainableSavingsProps {
}

export function SustainableSavings (props: ISustainableSavingsProps) {
  const dispatch = useAppDispatch();
  const [isAppLoaded, setIsAppLoaded] = React.useState(false);
  const [isDataFetchError, setIsDataFetchError] = React.useState(false);

  React.useEffect(() => {
    async function fetchAppData() {
      if(!isAppLoaded) {
        try {
          const result = await Promise.all([
            dispatch(fetchCars()).unwrap(),
            dispatch(fetchTrips()).unwrap(),
            dispatch(fetchCosts()).unwrap()
          ]);
          setIsAppLoaded(true);
        }
        catch {
          setIsDataFetchError(true);
        }
      }
    }
    fetchAppData();
  }, [dispatch, isAppLoaded]);

  if(!isAppLoaded) {
    return (
      <Box>
        <Typography variant='h2' component='h1' sx={{ fontWeight: 'bold' }}>Sustainable Savings</Typography>
        <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {isDataFetchError ? 
            <Typography>Unable to fetch data. Please start the api by running "yarn start-api"</Typography>
            : <CircularProgress />
          }
        </Box>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant='h2' component='h1' sx={{ fontWeight: 'bold' }}>Sustainable Savings</Typography>
      </Grid>
      <Grid item xs={12}>
        <VehicleSelect />
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 300,
          }}
        >
          <SavingsGraph />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 200,
          }}
        >
          <TotalSavings />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SustainableSavings;
