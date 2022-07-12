import { getCosts }  from './costs.selectors';
import { store } from 'appState/store';

describe('getActiveVehicle', () => {
  const initialState = store.getState();
  const stateWithData = {
    ...initialState,
    costs: {
      status: 'fulfilled',
      data: {
        costGas: 3.6,
        costKWh: .14,
        lbsCo2PerKWh: .9,
        lbsCO2PerGallonGas: 19.59,
      }
    }
  };
  
  it('Defaults to an empty object', () => {
    expect(getCosts(initialState)).toEqual({});
  });

  it('should return the costs', () => {
    expect(getCosts(stateWithData)).toEqual({
      costGas: 3.6,
      costKWh: .14,
      lbsCo2PerKWh: .9,
      lbsCO2PerGallonGas: 19.59,
    });
  });
});