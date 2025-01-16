import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//* Mi intento => si funciono - Inicio
const routes: Routes = [
  {
    path: 'selector',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'selector'
  }
];
//* Mi intento => si funciono - fin

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
