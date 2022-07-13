import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/** Types */
import { Costs } from 'types/Costs';

export interface CostsState {
  data: Costs,
  status: string
}

const initialState: CostsState = {
  data: {} as Costs,
  status: 'idle',
};

export const fetchCosts = createAsyncThunk(
  'costs/fetchCosts',
  async () => {
    const response = await fetch('http://localhost:3333/costs');

    return (await response.json()) as Costs; 
  }
);

export const costsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCosts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchCosts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default costsSlice.reducer;
