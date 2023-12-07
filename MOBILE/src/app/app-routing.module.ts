import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'editarusuario',
    loadChildren: () => import('./editarusuario/editarusuario.module').then(m => m.EditarusuarioPageModule)
  },
  
  {
    path: 'editartecnologia',
    loadChildren: () => import('./editartecnologia/editartecnologia.module').then(m => m.EditartecnologiaPageModule)
  },
  {
    path: 'editarinteres',
    loadChildren: () => import('./editarinteres/editarinteres.module').then(m => m.EditarinteresPageModule)
  },{
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
