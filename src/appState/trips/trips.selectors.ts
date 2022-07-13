import { RootState } from 'store';
/** Types */
import { Car } from 'types/Car';
import { Trip } from 'types/Trip';
import { MonthlyCost, MonthlySavings } from 'types/Costs';

/** Selectors */
import { getCarById } from 'appState/cars/cars.selectors';
import { getCosts } from 'appState/costs/costs.selectors';

export const getTripsForCarId = (state: RootState, id: string): Trip => state.trips.byCarId[id] || {};
export const getAllTripCarIds = (state: RootState): string[] => state.trips.allCarIds;

export const getCarsForTrips = (state: RootState): Car[] => state.trips.allCarIds.map(id => getCarById(state, id));

export const getMonthlyCostForVehicle = (state: RootState, id: string, tripsCarId?: string): MonthlyCost[] => {
  const vehicle = getCarById(state, id);
  const trips = getTripsForCarId(state, tripsCarId || id);
  const costs = getCosts(state);

  if (vehicle.classification === 'EV' || vehicle.classification === 'PHEV') {
    return trips?.monthlyDrivingData?.map((currentTrip) => {
      const currentMonthCost = (currentTrip.milesDriven/vehicle.mpkWh)*costs.costKWh;
  
      return {
        month: currentTrip.month,
        cost: currentMonthCost
      };
    }) || [];
  }
  
  return trips?.monthlyDrivingData?.map((currentTrip) => {
    const currentMonthCost = (currentTrip.milesDriven/vehicle.mpg)*costs.costGas;

    return {
      month: currentTrip.month,
      cost: currentMonthCost
    };
  }) || [];
};

export const getTripSavingsDataForCarId = (state: RootState, id: string): MonthlySavings[] => {
  const monthlyCostGas = getMonthlyCostForVehicle(state, '2019-Audi-Q7--', id);
  const monthlyCostActiveVehicle = getMonthlyCostForVehicle(state, id);

  return monthlyCostActiveVehicle.map((monthlyCost, i) => {
    return {
      month: monthlyCost.month,
      savings: monthlyCostGas[i].cost - monthlyCost.cost,
    };
  });
};

export const getTotalSavingsForCarId = (state: RootState, id: string) => {
  const tripSavings = getTripSavingsDataForCarId(state, id);

  return tripSavings.reduce((totalSavings, currentSavings) => {
    return currentSavings.savings + totalSavings;
  }, 0);
};