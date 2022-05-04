import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './componentes/alumnos/perfil/perfil.component';
import { RegistrarAsistenciaComponent } from './componentes/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistrarNotaComponent } from './componentes/docente/registrar-nota/registrar-nota.component';
import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { RegistrarAlumnoComponent } from './componentes/administrador/registrar-alumno/registrar-alumno.component';
import { RegistrarProfesorComponent } from './componentes/administrador/registrar-profesor/registrar-profesor.component';
import { RegistrarCursoComponent } from './componentes/administrador/registrar-curso/registrar-curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    RegistrarAsistenciaComponent,
    RegistrarNotaComponent,
    LoginComponent,
    SidebarComponent,
    RegistrarAlumnoComponent,
    RegistrarProfesorComponent,
    RegistrarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
