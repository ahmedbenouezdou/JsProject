import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app/app.component';
import { BookComponent }      from './app/book/book.component';
import { PanierComponent }      from './app/panier/panier.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing,FormsModule],
  declarations: [ AppComponent,BookComponent ,PanierComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


