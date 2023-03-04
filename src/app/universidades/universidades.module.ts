import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadPageRoutingModule } from './universidades-routing.module';

import { UniversidadPage } from './universidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadPageRoutingModule,
  ],
  declarations: [UniversidadPage],
})
export class UniversidadPageModule {}
