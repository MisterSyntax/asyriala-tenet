import { 
  getTripsForCarId,
  getAllTripCarIds,
  getCarsForTrips
}  from './trips.selectors';
import { store } from 'appState/store';

import { mockCar } from 'types/Car';

describe('getTripsForCarId', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    cars: {
      allIds: [mockCar.id],
      byId: {
        [mockCar.id]: mockCar
      },
      status: 'fulfilled',
    },
    trips: {
      allCarIds: [mockCar.id],
      byCarId: {
        [mockCar.id]: {
          carId: mockCar.id,
          monthlyDrivingData: [{ month: 'Jan',  milesDrive: 10}, { month: 'Feb',  milesDrive: 20}]
        }
      },
      status: 'idle',
    }
  };
  
  it('Defaults to an empty object', () => {
    expect(getTripsForCarId(stateWithData, 'bill-the-car')).toEqual({});
  });

  it('returns the trip for the carId', () => {
    expect(getTripsForCarId(stateWithData, mockCar.id)).toEqual({
      carId: mockCar.id,
      monthlyDrivingData: [{ month: 'Jan',  milesDrive: 10}, { month: 'Feb',  milesDrive: 20}]
    });
  });
});

describe('getAllTripCarIds', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    cars: {
      allIds: [mockCar.id],
      byId: {
        [mockCar.id]: mockCar
      },
      status: 'fulfilled',
    },
    trips: {
      allCarIds: [mockCar.id],
      byCarId: {
        [mockCar.id]: {
          carId: mockCar.id,
          monthlyDrivingData: [{ month: 'Jan',  milesDrive: 10}, { month: 'Feb',  milesDrive: 20}]
        }
      },
      status: 'idle',
    }
  };
  it('shoudl return an empty array by default', () => {
    expect(getAllTripCarIds(initialState)).toEqual([]);
  });
  it('should return the array of Car Ids', () => {
    expect(getAllTripCarIds(stateWithData)).toEqual([mockCar.id]);
  });
});

describe('getCarsForTrips', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    cars: {
      allIds: [mockCar.id],
      byId: {
        [mockCar.id]: mockCar
      },
      status: 'fulfilled',
    },
    trips: {
      allCarIds: [mockCar.id],
      byCarId: {
        [mockCar.id]: {
          carId: mockCar.id,
          monthlyDrivingData: [{ month: 'Jan',  milesDrive: 10}, { month: 'Feb',  milesDrive: 20}]
        }
      },
      status: 'idle',
    }
  };
  it('returns empty array by default', () => {
    expect(getCarsForTrips(initialState)).toEqual([]);
  });

  it('returns the array of cars', () => {
    expect(getCarsForTrips(stateWithData)).toEqual([mockCar]);
  });
});