import vehicleSelectReducer, {
  VehicleSelectState,
  setActiveVehicle,
} from './vehicleSelect.slice';

describe('counter reducer', () => {
  const initialState: VehicleSelectState = {
    activeVehicle: ''
  };
  it('should handle initial state', () => {
    expect(vehicleSelectReducer(undefined, { type: 'unknown' })).toEqual({
      activeVehicle: '',
    });
  });

  it('should handle setting the vehicle', () => {
    const actual = vehicleSelectReducer(initialState, setActiveVehicle('2020-Audi_Q5-Premium_Plus-4D_SUV_2.0T_PHEV'));
    expect(actual.activeVehicle).toEqual('2020-Audi_Q5-Premium_Plus-4D_SUV_2.0T_PHEV');
  });
});
