import { Docente } from "./docente";

export interface RegistroAsistencia{
    codRA :string,
    nroSesionRA: number,
    fechaRA: string,
    horaInicio: string,
    horaFin: string,
    Unidad: string,
    docenteRA: Docente,
    boton:boolean 
}