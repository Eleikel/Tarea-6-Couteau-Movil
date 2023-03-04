import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversidadPage } from './universidades.page';

const routes: Routes = [
  {
    path: '',
    component: UniversidadPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversidadPageRoutingModule {}
