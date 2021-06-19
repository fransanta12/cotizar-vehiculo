import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RestService } from './service/rest.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CotizadorPrendarioComponent } from './component/cotizador-prendario/cotizador-prendario.component';
import { MaterialModule } from './material/material/material.module';
import { MenuStepperComponent } from './component/menu-stepper/menu-stepper.component';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { CotizacionVehiculoComponent } from './component/cotizacion-vehiculo-cotizar/cotizacion-vehiculo.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ResumenCotizacionComponent } from './component/resumen-cotizacion/resumen-cotizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizadorPrendarioComponent,
    MenuStepperComponent,
    CotizacionVehiculoComponent,
    ResumenCotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
