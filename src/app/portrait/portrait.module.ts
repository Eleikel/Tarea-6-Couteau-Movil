import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortraitPageRoutingModule } from './portrait-routing.module';

import { PortadaPage } from './portrait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortraitPageRoutingModule
  ],
  declarations: [PortadaPage]
})
export class PortraitPageModule {}
