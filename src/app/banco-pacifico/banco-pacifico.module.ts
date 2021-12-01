import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancoPacificoPageRoutingModule } from './banco-pacifico-routing.module';

import { BancoPacificoPage } from './banco-pacifico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancoPacificoPageRoutingModule
  ],
  declarations: [BancoPacificoPage]
})
export class BancoPacificoPageModule {}
