import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';

/** slices */
import cars from './cars/cars.slice';
import costs from './costs/costs.slice';
import trips from './trips/trips.slice';
import vehicleSelect from './features/vehicleSelect/vehicleSelect.slice';

export const store = configureStore({
  reducer: {
    cars,
    costs,
    features: combineReducers({
      vehicleSelect,
    }),
    trips,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
