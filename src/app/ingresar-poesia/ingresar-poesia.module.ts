import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarPoesiaPageRoutingModule } from './ingresar-poesia-routing.module';

import { IngresarPoesiaPage } from './ingresar-poesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarPoesiaPageRoutingModule
  ],
  declarations: [IngresarPoesiaPage]
})
export class IngresarPoesiaPageModule {}
