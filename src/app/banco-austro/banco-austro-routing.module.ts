import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoAustroPage } from './banco-austro.page';

const routes: Routes = [
  {
    path: '',
    component: BancoAustroPage
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
export class BancoAustroPageRoutingModule {}
