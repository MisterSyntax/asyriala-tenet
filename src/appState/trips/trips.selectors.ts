import { RootState } from 'store';
import { Car } from 'types/Car';
import { Trip } from 'types/Trip';
import { getCarById } from 'appState/cars/cars.selectors';

export const getTripsForCarId = (state: RootState, id: string): Trip => state.trips.byCarId[id] || {};
export const getAllTripCarIds = (state: RootState): string[] => state.trips.allCarIds;

export const getCarsForTrips = (state: RootState): Car[] => state.trips.allCarIds.map(id => getCarById(state, id));
