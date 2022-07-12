import { RootState } from 'store';
import { Costs } from 'types/Costs';

export const getCosts = (state: RootState): Costs => state.costs.data || {};