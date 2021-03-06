import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RestService } from './service/rest.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MenuStepperComponent } from './component/menu-stepper/menu-stepper.component';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { CotizacionVehiculoComponent } from './component/cotizacion-vehiculo-cotizar/cotizacion-vehiculo.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { InformacionComponent } from './component/informacion/informacion.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    MenuStepperComponent,
    CotizacionVehiculoComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    NgxMaskModule.forRoot()
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
