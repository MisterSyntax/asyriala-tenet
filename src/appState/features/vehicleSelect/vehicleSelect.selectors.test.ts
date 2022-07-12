import { getActiveVehicle }  from './vehicleSelect.selectors';
import { store } from 'appState/store';

describe('getActiveVehicle', () => {
  it('should return the active vehicle', () => {
    const initialState = store.getState();
    expect(getActiveVehicle({
      ...initialState,
      features: {
        vehicleSelect: {
          activeVehicle: '2020-Audi_Q5-Premium_Plus-4D_SUV_2.0T_PHEV'
        }
      }
    })).toEqual('2020-Audi_Q5-Premium_Plus-4D_SUV_2.0T_PHEV');
  });
});
