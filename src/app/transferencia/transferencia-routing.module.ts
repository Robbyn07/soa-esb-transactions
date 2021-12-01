import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaPage } from './transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaPage
  },
  {
    path: 'deposito',
    loadChildren: () => import('./deposito/deposito.module').then( m => m.DepositoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaPageRoutingModule {}
