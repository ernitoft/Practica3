import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditartecnologiaPageRoutingModule } from './editartecnologia-routing.module';

import { EditartecnologiaPage } from './editartecnologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditartecnologiaPageRoutingModule
  ],
  declarations: [EditartecnologiaPage]
})
export class EditartecnologiaPageModule {}
