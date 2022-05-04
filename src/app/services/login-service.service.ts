import { Injectable } from '@angular/core';
import { Administrador } from '../interfaces/administrador';
import { Alumno } from '../interfaces/alumno';
import { administradores, alumnos, docentes } from '../interfaces/baseDatos';
import { Docente } from '../interfaces/docente';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private Alumnos:Alumno[] = alumnos;
  private Docentes:Docente[] = docentes;
  private administradores:Administrador[] = administradores;
  private indice:number = 0;
  constructor() { }
  buscarRol(usuario:string, contrasenia:string): number{
    for(let i = 0 ; i < this.Alumnos.length; i++){
      if(this.Alumnos[i].usuario == usuario && this.Alumnos[i].contrasenia == contrasenia){
        this.indice = i;
        return i;
      }
    }
    return -1;
  }
  getDatosAlumno(): Alumno{
    return this.Alumnos[this.indice];
  }
  
}

