import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiremePageRoutingModule } from './hire-me-routing.module';

import { HiremePage } from './hire-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiremePageRoutingModule
  ],
  declarations: [HiremePage]
})
export class HiremePageModule {}
