import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancoAustroPageRoutingModule } from './banco-austro-routing.module';

import { BancoAustroPage } from './banco-austro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancoAustroPageRoutingModule
  ],
  declarations: [BancoAustroPage]
})
export class BancoAustroPageModule {}
