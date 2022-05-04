import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public alumno:Alumno = {
    codigoA: "",
    usuario:"",
    contrasenia:"",
    nombre: "",
    apellidoP: "",
    apellidoM:"",
    dni:"",
    sexo:"",
    fechaNacimiento:"",
    direccion:""
  }
  constructor(service:LoginServiceService) { 
    this.alumno = service.getDatosAlumno();
  }

  ngOnInit(): void {
  }
  getNombre(){
    return this.alumno.nombre + " " + this.alumno.apellidoP + " " + this.alumno.apellidoM;
  }
}
