import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../interfaces/cursos'
import { cursos } from '../../../interfaces/baseDatos'

@Component({
  selector: 'app-registrar-curso',
  templateUrl: './registrar-curso.component.html',
  styleUrls: ['./registrar-curso.component.css']
})
export class RegistrarCursoComponent implements OnInit {

  listaCursos: Curso[] = cursos;

  constructor() { }

  ngOnInit(): void {
  }

  cursoVacio(): Curso {
    return {
      codigo: "",
      nombre: "",
      descripcion: ""
    }
  }

  cursoAux = this.cursoVacio();

  onAgregarCurso(): void {
    this.listaCursos.push(this.cursoAux);
    this.cursoAux = this.cursoVacio();
  }

}