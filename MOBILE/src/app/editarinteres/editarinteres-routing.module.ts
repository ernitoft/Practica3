import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarinteresPage } from './editarinteres.page';

const routes: Routes = [
  {
    path: '',
    component: EditarinteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarinteresPageRoutingModule {}
