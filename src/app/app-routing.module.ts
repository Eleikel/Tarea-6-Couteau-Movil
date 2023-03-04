import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'portrait',
    loadChildren: () =>
      import('./portrait/portrait.module').then((m) => m.PortraitPageModule),
  },
  {
    path: 'genero',
    loadChildren: () =>
      import('./genero/genero.module').then((m) => m.PersonajesPageModule),
  },
  {
    path: 'clima',
    loadChildren: () =>
      import('./clima/clima.module').then((m) => m.ClimaPageModule),
  },
  {
    path: 'edad',
    loadChildren: () =>
      import('./edad/edad.module').then((m) => m.AcercadePageModule),
  },
  {
    path: 'universidades',
    loadChildren: () =>
      import('./universidades/universidades.module').then(
        (m) => m.UniversidadPageModule
      ),
  },
  {
    path: 'hireme',
    loadChildren: () =>
      import('./hire-me/hire-me.module').then((m) => m.HiremePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
