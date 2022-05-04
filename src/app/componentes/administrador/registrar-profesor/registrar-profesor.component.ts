import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente'
import { docentes } from '../../../interfaces/baseDatos'
import { Form } from '@angular/forms';


@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.css']
})
export class RegistrarProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listaDocentes: Docente[] = docentes;

  docenteVacio():Docente{
    return{
      codigoD:"",
      usuario: "",
      contrasenia: "",
      nombre:"",
      especialidad:"",
      apellidoP: "",
      apellidoM: "",
      celular: "",
      correo:"",
    }
  }

  docenteAux=this.docenteVacio();

  RegistrarDocente():void{
    this.listaDocentes.push(this.docenteAux);
    this.docenteAux=this.docenteVacio();
  }
}
