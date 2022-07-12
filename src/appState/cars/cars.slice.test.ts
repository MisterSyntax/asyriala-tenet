import carsReducer, {
  fetchCars
} from './cars.slice';
import { store } from 'appState/store';

describe('cas reducer', () => {
  it('should handle initial state', () => {
    expect(carsReducer(undefined, { type: 'unknown' })).toEqual({
      allIds: [],
      byId: {},
      status: 'idle',
    });
  });
});

describe('fetchCars', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('runs the function in asyncThunk', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
      }),
    ) as jest.Mock;
    await fetchCars()(dispatch, store.getState, {});
    expect(dispatch.mock.calls[1][0].type.match(/fulfilled/).length).toEqual(1);
  });
  it('handles a failure', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject({ test: 100 }),
      }),
    ) as jest.Mock;
    await fetchCars()(dispatch, store.getState, {});
    expect(dispatch.mock.calls[1][0].type.match(/rejected/).length).toEqual(1);
  });
});