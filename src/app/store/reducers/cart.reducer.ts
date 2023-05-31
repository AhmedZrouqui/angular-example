import { IProduct } from 'src/types/product.type';
import {
  AddCartItemAction,
  CartActionType,
  InitCartAction,
} from '../actions/cart.action';
import ICartModel from '../models/cart.model';
import { createReducer, Action, on } from '@ngrx/store';
import { state } from '@angular/animations';

const initialState: ICartModel = {
  products: [],
};

const reducer = createReducer(
  initialState,
  on(InitCartAction, (state, action) => ({
    ...state,
    id: action.payload,
  })),
  on(AddCartItemAction, (state, action) => ({
    ...state,
    products: [...state.products, action.payload] as IProduct[],
  }))
);

export function cartReducer(state: ICartModel = initialState, action: Action) {
  return reducer(state, action);
}
