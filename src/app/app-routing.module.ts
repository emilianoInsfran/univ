import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';
import { PerfilComponent } from './reclutador/perfil/perfil.component';
import { InfoProyectoComponent } from './info-proyecto/info-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfilEstudiante', component: PerfilEstudianteComponent },
  { path: 'perfilReclutador', component: PerfilComponent},
  { path: 'infoProyecto', component: InfoProyectoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
