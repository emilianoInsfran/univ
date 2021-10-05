import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';
import { PerfilComponent } from './reclutador/perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { InfoProyectoComponent } from './info-proyecto/info-proyecto.component';
import { TarjetaUsuarioComponent } from './tarjeta-usuario/tarjeta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilEstudianteComponent,
    PerfilComponent,
    LoginComponent,
    NavbarComponent,
    ProyectoComponent,
    InfoProyectoComponent,
    TarjetaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
