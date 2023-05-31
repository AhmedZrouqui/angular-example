import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { cartReducer } from './store/reducers/cart.reducer';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /* configure ngRx app store */
    StoreModule.forRoot({
      cart: cartReducer,
    }),
    /* configure app with AmplifyAuthenticatorModule */
    AmplifyAuthenticatorModule,

    /* configure angular's form modules */
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
