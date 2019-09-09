import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from "./venta.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ComprasComponent } from './components/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VentasComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
