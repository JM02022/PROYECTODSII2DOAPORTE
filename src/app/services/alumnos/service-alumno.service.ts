import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { alumnos, registroAsistencias } from 'src/app/interfaces/baseDatos';
import { RegistroAsistencia } from 'src/app/interfaces/registroAsistencia';

@Injectable({
  providedIn: 'root'
})
export class ServiceAlumnoService {
  private registroAsistencias:RegistroAsistencia[] = registroAsistencias; 
  private Alumnos:Alumno[] = alumnos;
  constructor() { }
  getDatosRegistro():RegistroAsistencia[]{
    return this.registroAsistencias;
  }
  getDatosAlumnos():Alumno[]{
    return this.Alumnos;
  }
}
