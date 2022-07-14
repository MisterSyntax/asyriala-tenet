import { configureStore, combineReducers, ThunkAction, Action, PreloadedState } from '@reduxjs/toolkit';

/** slices */
import cars from './cars/cars.slice';
import costs from './costs/costs.slice';
import trips from './trips/trips.slice';
import vehicleSelect from './features/vehicleSelect/vehicleSelect.slice';

export const rootReducer = combineReducers({
  cars,
  costs,
  features: combineReducers({
    vehicleSelect,
  }),
  trips,
});

export const store = configureStore({
  reducer: rootReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
