import { createSelector } from '@ngrx/store';
import { State } from '../models/state.model';

const RootState = (state: State) => state;

export const getCart = createSelector(RootState, (state: State) => state.cart);
