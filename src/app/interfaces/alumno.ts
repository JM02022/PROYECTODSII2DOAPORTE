export interface Alumno{
    codigoA:string,
    usuario:string,
    contrasenia:string,
    nombre: string,
    apellidoP: string,
    apellidoM:string,
    dni:string,
    sexo:string,
    fechaNacimiento:string,
    direccion:string,
    nota?:number
}
////->copair desde aqui
export interface Alumno2{
    codAlumno:string,
    nombreA:string,
    apellidoPA:string,
    apellidoMA:string,
    fechaNacimientoA:string
}
export interface Docente2{
    codDocenteD:string,
    nombreD:string,
    apellidoPD:string,
    apellidoMD:string,
    nivelCargoEstudiantes: string
}
export interface Asistencia{
    fechaAsistencia: string,
    alumnoAsistencia:Alumno2,
    aulaAsistecia:Aula,
    estado: string,
    modificacionesA?:number|string
}
export interface Aula{
    codAula:string,
    numeroAula:number
}
export interface DetalleEstudiante{
    niveldeEstudioD:string,
    gradoD:string,
    alumnoD:Alumno2
}

export interface RegistroAsistencia{
    codRA :string,
    nroSesionRA: number,
    fechaRA: string,
    horaInicio: string,
    horaFin: string,
    Unidad: string,
    docenteRA: Docente2,
    boton:boolean 
}