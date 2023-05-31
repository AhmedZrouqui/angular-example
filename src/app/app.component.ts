import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Cart } from '../models';
import { Store, select } from '@ngrx/store';
import { State } from './store/models/state.model';
import ICartModel from './store/models/cart.model';
import { getCart } from './store/selectors/cart.selector';
import { AddCartItemAction, InitCartAction } from './store/actions/cart.action';
import { IProduct } from 'src/types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ecommerce-angular-example';
  cart$: ICartModel = {} as ICartModel;

  constructor(private store: Store<State>) {}

  async ngOnInit() {
    this.store
      .pipe(select(getCart))
      .subscribe((response) => (this.cart$ = response));

    if (this.cart$.id) {
      return;
    }
    console.log(this.cart$);
    await DataStore.save(
      new Cart({
        Products: [],
      })
    ).then((res) => this.store.dispatch(InitCartAction({ payload: res.id })));
  }

  async onBtnClick() {
    console.log('clicked me', this.cart$);
    this.store.dispatch(
      AddCartItemAction({
        payload: {
          name: 'test-products',
          image_src:
            'https://images.ctfassets.net/3oa8py5argun/4fDsZfba9bXfqSXaRrriXr/b50c12f3495c520f41c577535fe9cd55/Google-Bard.webp?w=1920',
        } as IProduct,
      })
    );
  }
}
