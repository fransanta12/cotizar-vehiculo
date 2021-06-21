import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuStepperComponent } from './component/menu-stepper/menu-stepper.component';
const routes: Routes = [
  {
    path: '',
    component: MenuStepperComponent
  },
  {
    path: 'cotizador',
    component: MenuStepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
