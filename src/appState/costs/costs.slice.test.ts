import costsReducer, {
  fetchCosts
} from './costs.slice';
import { store } from 'appState/store';

describe('costs reducer', () => {
  it('should handle initial state', () => {
    expect(costsReducer(undefined, { type: 'unknown' })).toEqual({
      data: {},
      status: 'idle',
    });
  });
});

describe('fetchCosts', () => {
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
    await fetchCosts()(dispatch, store.getState, {});
    expect(dispatch.mock.calls[1][0].type.match(/fulfilled/).length).toEqual(1);
  });
  it('handles a failure', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject({ test: 100 }),
      }),
    ) as jest.Mock;
    await fetchCosts()(dispatch, store.getState, {});
    expect(dispatch.mock.calls[1][0].type.match(/rejected/).length).toEqual(1);
  });
});