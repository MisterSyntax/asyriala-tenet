import { 
  getTripsForCarId,
  getAllTripCarIds,
  getCarsForTrips,
  getMonthlyCostForVehicle,
  getTripSavingsDataForCarId,
}  from './trips.selectors';
import { store } from 'appState/store';

import { mockCar, mockGasCar } from 'types/Car';
import { mockCosts } from 'types/Costs';

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
          monthlyDrivingData: [{ month: 'Jan',  milesDriven: 10}, { month: 'Feb',  milesDriven: 20}]
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
      monthlyDrivingData: [{ month: 'Jan',  milesDriven: 10}, { month: 'Feb',  milesDriven: 20}]
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
          monthlyDrivingData: [{ month: 'Jan',  milesDriven: 10}, { month: 'Feb',  milesDriven: 20}]
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
          monthlyDrivingData: [{ month: 'Jan',  milesDriven: 10}, { month: 'Feb',  milesDriven: 20}]
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

describe('getMonthlyCostForVehicle', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    costs: {
      status: 'fulfilled',
      data: {
        ...mockCosts
      }
    },
    cars: {
      allIds: [mockCar.id, mockGasCar.id],
      byId: {
        [mockCar.id]: mockCar,
        [mockGasCar.id]: mockGasCar,
      },
      status: 'fulfilled',
    },
    trips: {
      allCarIds: [mockCar.id],
      byCarId: {
        [mockCar.id]: {
          carId: mockCar.id,
          monthlyDrivingData: [{ month: 'Jan',  milesDriven: 417}, { month: 'Feb',  milesDriven: 20}]
        }
      },
      status: 'idle',
    }
  };
  it('gets the montly costs for a vehicle', () => {
    expect(getMonthlyCostForVehicle(stateWithData, mockCar.id)).toEqual([
      {
        month: 'Jan',
        cost: 29.19
      },
      {
        month: 'Feb',
        cost: 1.4000000000000001,
      }
    ]);
  });
  it('gets the montly costs for a gas vehicle', () => {
    expect(getMonthlyCostForVehicle(stateWithData, mockGasCar.id, mockCar.id)).toEqual([
      {
        month: 'Jan',
        cost: 71.4857142857143
      },
      {
        month: 'Feb',
        cost: 3.4285714285714284,
      }
    ]);
  });
});

describe('getTripSavingsDataForCarId', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    costs: {
      status: 'fulfilled',
      data: {
        ...mockCosts
      }
    },
    cars: {
      allIds: [mockCar.id, mockGasCar.id],
      byId: {
        [mockCar.id]: mockCar,
        [mockGasCar.id]: mockGasCar,
      },
      status: 'fulfilled',
    },
    trips: {
      allCarIds: [mockCar.id],
      byCarId: {
        [mockCar.id]: {
          carId: mockCar.id,
          monthlyDrivingData: [{ month: 'Jan',  milesDriven: 417}, { month: 'Feb',  milesDriven: 20}]
        }
      },
      status: 'idle',
    }
  };
  it('calculates the difference between the cost for the selected car vs the baseline', () => {
    expect(getTripSavingsDataForCarId(stateWithData, mockCar.id)).toEqual([
      {
        month: 'Jan',
        savings: 42.2957142857143
      },
      {
        month: 'Feb',
        savings: 2.0285714285714285
      }
    ]);
  });
});
