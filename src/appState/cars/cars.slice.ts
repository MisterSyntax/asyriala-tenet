import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/** Types */
import { Car } from 'types/Car';

export interface CarsState {
  allIds: string[];
  byId: { [id: string]: Car };
  status: string
}

const initialState: CarsState = {
  allIds: [],
  byId: {},
  status: 'idle',
};

interface CarsResponse {
  cars: Car[]
};

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async () => {
    const response = await fetch('http://localhost:3333/cars');

    return (await response.json()) as CarsResponse; 
  }
);

export const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const byId = action.payload.cars.reduce((carsById, car:Car) => {
          carsById[car.id as keyof CarsResponse] = car;

          return carsById;
        }, {} as { [id: string]: Car});
        state.byId = byId;
        state.allIds = Object.keys(byId);
      })
      .addCase(fetchCars.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default carsSlice.reducer;
