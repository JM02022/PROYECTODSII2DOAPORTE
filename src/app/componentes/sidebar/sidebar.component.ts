import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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

}
