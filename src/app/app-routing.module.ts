import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorPrendarioComponent } from './component/cotizador-prendario/cotizador-prendario.component';
const routes: Routes = [
  {
    path: '',
    component: CotizadorPrendarioComponent
  },
  {
    path: 'cotizador',
    component: CotizadorPrendarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
