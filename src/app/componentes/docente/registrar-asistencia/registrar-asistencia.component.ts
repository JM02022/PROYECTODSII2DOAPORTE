import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { RegistroAsistencia } from 'src/app/interfaces/registroAsistencia';
import { ServiceAlumnoService } from 'src/app/services/alumnos/service-alumno.service';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {
  registros:RegistroAsistencia[] = [];
  almnos:Alumno[] = [];
  constructor(service:ServiceAlumnoService) {
    this.registros = service.getDatosRegistro();
    this.almnos = service.getDatosAlumnos();
   }

  ngOnInit(): void {
  }
  public rpta:string[] = ["asistio","tardanza","no asistio"];
  // //metodos
  // btn:boolean = false;
  // getNombreDocente():string {
  //   return this.docente.nombreD + " " + this.docente.apellidoPD + " " + this.docente.apellidoMD
  // };
  // cargarRegistro(i:number): void{
  //   this.aux = i;
  //   this.btn = this.registroAsistencias[i].boton;
  // }
  // mostrarFecha(){
  //   return this.registroAsistencias[this.aux].fechaRA;
  // }
  // posAlumno(alumno:datos.Alumno, listaAsistencia: datos.Asistencia[],fecha:string):number{
  //   for(let i = 0 ; i < listaAsistencia.length;i++){
  //     if(listaAsistencia[i].alumnoAsistencia == alumno && listaAsistencia[i].fechaAsistencia == fecha){
  //       return i;
  //     }
  //   } 
  //   return -1;
  // }
  // guardarAsistencia(i:number,j:number):void{
  //   console.log(this.mostrarFecha())
  //   let pos = this.posAlumno(this.alumnos[i],this.asistencias,this.mostrarFecha());
  //   if(this.asistencias.includes( this.asistencias[pos]) && this.asistencias[pos].fechaAsistencia ==  this.mostrarFecha() ){
  //     this.asistencias[pos].estado = this.rpta[j];
  //   }
  //   else{
  //     this.asistencias.push({
  //       fechaAsistencia: this.mostrarFecha(),
  //       alumnoAsistencia: this.alumnos[i],
  //       aulaAsistecia:this.aula,
  //       estado: this.rpta[j],
  //   })
  //   }
  //   console.table(this.asistencias);
  // }
  // actualizar(n:number){
  //   this.registroAsistencias[n].boton = true;
  //   this.btn = this.registroAsistencias[n].boton;
  // }
}
