import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RutaAComponent } from '../ruta-a/ruta-a.component';
import { RutaBComponent } from '../ruta-b/ruta-b.component';

const rutas:Routes = [
  {
    path:'lista-contactos',
    component: RutaAComponent
  },
  {
    path:'nuevo-contacto',
    component: RutaBComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo:'/lista-contactos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
