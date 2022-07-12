import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VehicleSelectState {
  activeVehicle: string;
}

const initialState: VehicleSelectState = {
  activeVehicle: '',
};

export const vehicleSelectSlice = createSlice({
  name: 'vehicleSelect',
  initialState,
  reducers: {
    setActiveVehicle: (state, action: PayloadAction<string>) => {
      state.activeVehicle = action.payload;
    },
  },
});

export const { setActiveVehicle } = vehicleSelectSlice.actions;

export default vehicleSelectSlice.reducer;
