import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // MatSidenavModule,
    // MatStepperModule,
    // MatGridListModule,
    // MatTabsModule,
    // MatCardModule
  ],
  exports:[
    MatSidenavModule,
    MatStepperModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatCheckboxModule
    // ,
    // Ng5SliderModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
