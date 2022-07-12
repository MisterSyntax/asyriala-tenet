import { RootState } from 'store';

export const getActiveVehicle = (state: RootState) => state.features.vehicleSelect.activeVehicle;