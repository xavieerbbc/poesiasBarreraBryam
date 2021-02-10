import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarPoesiaPage } from './ingresar-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarPoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarPoesiaPageRoutingModule {}
