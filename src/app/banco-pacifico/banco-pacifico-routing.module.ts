import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoPacificoPage } from './banco-pacifico.page';

const routes: Routes = [
  {
    path: '',
    component: BancoPacificoPage
  },
  {
    path: 'depositar',
    loadChildren: () => import('./depositar/depositar.module').then( m => m.DepositarPageModule)
  },
  {
    path: 'retirar',
    loadChildren: () => import('./retirar/retirar.module').then( m => m.RetirarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoPacificoPageRoutingModule {}
