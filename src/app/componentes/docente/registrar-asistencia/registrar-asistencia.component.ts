import { Component, OnInit } from '@angular/core';
import {  Alumno2, Asistencia, Aula, DetalleEstudiante, Docente2, RegistroAsistencia } from 'src/app/interfaces/alumno';
import { ServiceAlumnoService } from 'src/app/services/alumnos/service-alumno.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {
  constructor(service:ServiceAlumnoService,servicio:LoginServiceService) {
 
   }

  ngOnInit(): void {
  }
  alumno :Alumno2 = {
    codAlumno: "A1",
    nombreA: "Sergio",
    apellidoPA: "Pantoja",
    apellidoMA: "Puma",
    fechaNacimientoA: "2000/01/01"
  }
  alumno2 :Alumno2= {
    codAlumno: "A2",
    nombreA: "Henry",
    apellidoPA: "Salazar",
    apellidoMA: "Quispe",
    fechaNacimientoA: "2000/03/02"
  }

  //detalles de alumnos
  detalleE :DetalleEstudiante = {
    niveldeEstudioD: "primaria",
    gradoD: "4er grado",
    alumnoD: this.alumno
  }
  detalleE2 :DetalleEstudiante = {
    niveldeEstudioD: "primaria",
    gradoD: "4er grado",
    alumnoD: this.alumno2
  }

  //datos docente
  docente: Docente2 = {
    codDocenteD: "D1",
    nombreD: "Dushan",
    apellidoPD: "Quillahuaman",
    apellidoMD: "Titto",
    nivelCargoEstudiantes: "4to grado de primaria"
  };

  //datos aula
  aula: Aula = {
    codAula: "AU1",
    numeroAula: 1
  }

  //registrosDeAsistencias
  sesion1: RegistroAsistencia = {
    codRA: "S1",
    nroSesionRA: 1,
    fechaRA: "08/04/2022",
    docenteRA: this.docente,
    horaInicio: "08:00:00",
    horaFin: "13:00:00",
    Unidad: "I",
    boton:false
  }
  sesion2: RegistroAsistencia = {
    codRA: "S2",
    nroSesionRA: 2,
    fechaRA: "09/04/2022",
    docenteRA: this.docente,
    horaInicio: "08:00:00",
    horaFin: "13:00:00",
    Unidad: "I",
    boton:false
  }
  sesion3: RegistroAsistencia = {
    codRA: "S3",
    nroSesionRA: 3,
    fechaRA: "10/04/2022",
    docenteRA: this.docente,
    horaInicio: "08:00:00",
    horaFin: "13:00:00",
    Unidad: "II",
    boton:false
  }
  
  //listas de alumnos, asistencias, registros de asistencias
  public rpta:string[] = ["asistio","tardanza","no asistio"];
  public alumnos: Alumno2[] = [this.alumno,this.alumno2];
  public asistencias: Asistencia[] = [];
  public registroAsistencias: RegistroAsistencia[] = [this.sesion1,this.sesion2,this.sesion3];
  aux:number = 0;
  myform: any;
  //metodos
  btn:boolean = false;
  getNombreDocente():string {
    return this.docente.nombreD + " " + this.docente.apellidoPD + " " + this.docente.apellidoMD
  };
  cargarRegistro(i:number): void{
    this.aux = i;
    this.btn = this.registroAsistencias[i].boton;
  }
  mostrarFecha(){
    return this.registroAsistencias[this.aux].fechaRA;
  }
  posAlumno(alumno:Alumno2, listaAsistencia: Asistencia[],fecha:string):number{
    for(let i = 0 ; i < listaAsistencia.length;i++){
      if(listaAsistencia[i].alumnoAsistencia == alumno && listaAsistencia[i].fechaAsistencia == fecha){
        return i;
      }
    } 
    return -1;
  }
  guardarAsistencia(i:number,j:number):void{
    console.log(this.mostrarFecha())
    let pos = this.posAlumno(this.alumnos[i],this.asistencias,this.mostrarFecha());
    if(this.asistencias.includes( this.asistencias[pos]) && this.asistencias[pos].fechaAsistencia ==  this.mostrarFecha() ){
      this.asistencias[pos].estado = this.rpta[j];
    }
    else{
      this.asistencias.push({
        fechaAsistencia: this.mostrarFecha(),
        alumnoAsistencia: this.alumnos[i],
        aulaAsistecia:this.aula,
        estado: this.rpta[j],
    })
    }
    console.table(this.asistencias);
  }
  actualizar(n:number){
    this.registroAsistencias[n].boton = true;
    this.btn = this.registroAsistencias[n].boton;
  }
}
