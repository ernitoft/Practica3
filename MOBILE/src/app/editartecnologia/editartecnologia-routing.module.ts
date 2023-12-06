import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditartecnologiaPage } from './editartecnologia.page';

const routes: Routes = [
  {
    path: '',
    component: EditartecnologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditartecnologiaPageRoutingModule {}
