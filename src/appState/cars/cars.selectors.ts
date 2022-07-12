import { RootState } from 'store';
import { Car } from 'types/Car';

export const getCarById = (state: RootState, id: string): Car => state.cars.byId[id] || {};