import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';
import { PerfilComponent } from './reclutador/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilEstudianteComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
