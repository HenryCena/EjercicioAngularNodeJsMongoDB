import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuario',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: UsuarioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
