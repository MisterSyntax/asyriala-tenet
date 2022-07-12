import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/** Types */
import { Trip } from 'types/Trip';

export interface TripsState {
  allCarIds: string[];
  byCarId: { [id: string]: Trip };
  status: string
}

const initialState: TripsState = {
  allCarIds: [],
  byCarId: {},
  status: 'idle',
};

interface TripsResponse {
  trips: Trip[]
};

export const fetchTrips = createAsyncThunk(
  'trips/fetchTrips',
  async () => {
    const response = await fetch('url');

    return (await response.json()) as TripsResponse; 
  }
);

export const tripsSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.status = 'idle';
        const byId = action.payload.trips.reduce((tripsById, trip:Trip) => {
          tripsById[trip.carId as keyof TripsResponse] = trip;

          return tripsById;
        }, {} as { [id: string]: Trip});
        state.byCarId = byId;
        state.allCarIds = Object.keys(byId);
      })
      .addCase(fetchTrips.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default tripsSlice.reducer;
