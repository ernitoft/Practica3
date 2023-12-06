import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarinteresPageRoutingModule } from './editarinteres-routing.module';

import { EditarinteresPage } from './editarinteres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarinteresPageRoutingModule
  ],
  declarations: [EditarinteresPage]
})
export class EditarinteresPageModule {}
