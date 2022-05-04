import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProfesorComponent } from './componentes/administrador/registrar-profesor/registrar-profesor.component';
import { RegistrarAsistenciaComponent } from './componentes/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistrarNotaComponent } from './componentes/docente/registrar-nota/registrar-nota.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent} from './componentes/alumnos/perfil/perfil.component';
import { RegistrarAlumnoComponent } from './componentes/administrador/registrar-alumno/registrar-alumno.component';
import { RegistrarCursoComponent } from './componentes/administrador/registrar-curso/registrar-curso.component';


const routes: Routes = [
  {
    path: '', redirectTo:'/login', pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'registrar-asistencia', component: RegistrarAsistenciaComponent
  },
  {
    path: 'registrar-profesor', component: RegistrarProfesorComponent
  },
  {
    path: 'registrar-nota', component: RegistrarNotaComponent
  },
  {
    path: 'registrar-alumno', component: RegistrarAlumnoComponent
  },
  {
    path: 'registrar-curso',component: RegistrarCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
