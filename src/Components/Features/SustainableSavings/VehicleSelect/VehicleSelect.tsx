import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'appState/redux-hooks';

/** Design System Components */
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

/** Components */

/** Types */

/** Actions */
import { setActiveVehicle } from 'appState/features/vehicleSelect/vehicleSelect.slice';

/** Selectors */
import { getActiveVehicle } from 'appState/features/vehicleSelect/vehicleSelect.selectors';
import { getCarsForTrips } from 'appState/trips/trips.selectors';

interface IAppProps {
}

export function App (props: IAppProps) {
  const dispatch = useAppDispatch();
  const activeVehicle = useAppSelector(getActiveVehicle);
  const carsForTrips = useAppSelector(getCarsForTrips);

  React.useEffect(() => {
    if(activeVehicle === '') {
      dispatch(setActiveVehicle(carsForTrips?.[0]?.id));
    }
  }, [activeVehicle, carsForTrips, dispatch]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="vehicle-select-label">Vehicle</InputLabel>
      <Select
        labelId="vehicle-select-label"
        id="vehicle-select-helper"
        value={activeVehicle || carsForTrips?.[0]?.id || ''}
        label="Vehicle"
        onChange={event => dispatch(setActiveVehicle(event.target.value))}
      >
        {carsForTrips.map(car => {
          return (
            <MenuItem value={car.id} key={car.id}>
              {`${car.year} ${car.make} ${car.model} ${car.series} ${car.style}`.trim()} 
            </MenuItem>
            );
        })}
      </Select>
      <FormHelperText>Select your vehicle to see savings</FormHelperText>
    </FormControl>
  );
}

export default App;
