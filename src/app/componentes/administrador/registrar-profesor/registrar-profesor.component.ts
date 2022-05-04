import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente'
import { docentes } from '../../../interfaces/baseDatos'


@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.css']
})
export class RegistrarProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listaDocentes:Docente[] = docentes;
}
