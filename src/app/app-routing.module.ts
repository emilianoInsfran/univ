import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';
import { PerfilComponent } from './reclutador/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfilEstudiante', component: PerfilEstudianteComponent },
  { path: 'perfilReclutador', component: PerfilComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
