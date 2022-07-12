import { getCarById }  from './cars.selectors';
import { store } from 'appState/store';

import { mockCar } from 'types/Car';

describe('getActiveVehicle', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    cars: {
      allIds: [mockCar.id],
      byId: {
        [mockCar.id]: {
          ...mockCar
        }
      },
      status: 'fulfilled',
    }
  };
  
  it('Defaults to an empty object', () => {
    expect(getCarById(stateWithData, 'bill-the-car')).toEqual({});
  });

  it('should return the car with the given id vehicle', () => {
    expect(getCarById(stateWithData, mockCar.id)).toEqual(mockCar);
  });
});