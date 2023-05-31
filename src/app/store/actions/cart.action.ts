import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/types/product.type';

export enum CartActionType {
  INIT_CART = '[Cart] Init Cart',
  ADD_ITEM = '[Cart] Add Item',
}

export const AddCartItemAction = createAction(
  CartActionType.ADD_ITEM,
  props<{ payload: IProduct }>()
);

export const InitCartAction = createAction(
  CartActionType.INIT_CART,
  props<{ payload: string }>()
);
