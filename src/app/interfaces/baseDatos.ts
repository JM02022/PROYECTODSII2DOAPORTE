import { Administrador } from "./administrador";
import { Alumno } from "./alumno";
import { Docente } from "./docente";
import { Curso } from './cursos';
import { RegistroAsistencia } from "./registroAsistencia";

export let alumnos: Alumno[] = [
    {
        codigoA: "A123",
        usuario: "Acarlo123",
        contrasenia: "carlo123",
        nombre: "Carlo",
        apellidoP: "Pantoja",
        apellidoM: "Puma",
        dni: "12345678",
        sexo: "Masculino",
        fechaNacimiento: "2014-05-21",
        direccion: "av. El Molino Rojo"
    },
    {
        codigoA: "A124",
        usuario: "Ajuan",
        contrasenia: "juan123",
        nombre: "Juan",
        apellidoP: "Gonzalo",
        apellidoM: "Lopez",
        dni: "43267890",
        sexo: "Masculino",
        fechaNacimiento: "2014-02-10",
        direccion: "Av. La cultura"
    },
    {
        codigoA: "A125",
        usuario: "Apaula",
        contrasenia: "paula123",
        nombre: "Paula",
        apellidoP: "Morales",
        apellidoM: "Mendes",
        dni: "21566734",
        sexo: "Femenino",
        fechaNacimiento: "2015-08-14",
        direccion: "Av. El Sol"
    }
];
export let docentes: Docente[] = [
    {
        codigoD: "D001",
        usuario: "Dpepe123",
        contrasenia: "pepe123",
        nombre: "Pedro",
        apellidoP: "Carrion",
        apellidoM: "Perez",
        celular: "987456732"
    },
    {
        codigoD: "D002",
        usuario: "Dpepe123",
        contrasenia: "pepe123",
        nombre: "Pedro",
        apellidoP: "Carrion",
        apellidoM: "Perez",
        celular: "987456732"
    }
];

export let administradores: Administrador[] = [
    {
        usuarioAd: "Spepe",
        contraseniaAd: "pepe123",
    }
];

export let cursos: Curso[] = [
    {
        codigo: "C001",
        nombre: "Matematica",
        descripcion: "NUMEROS NUMEROS NUMEROS",
        imagen: "https://www.lifeder.com/wp-content/uploads/2019/12/matematicas-concepto-lifeder-min-1024x682.jpg"
    },
    {
        codigo: "C002",
        nombre: "Literatura",
        descripcion: "NUMEROS NUMEROS NUMEROS",
        imagen: "https://www.lifeder.com/wp-content/uploads/2020/03/concepto-literatura-libros-min.jpg"
    },
    {
        codigo: "C003",
        nombre: "Quimica",
        descripcion: "NUMEROS NUMEROS NUMEROS",
        imagen: "https://dequimica.com/imagenes/teoria/quimica-general.jpg"
    },
    {
        codigo: "C004",
        nombre: "Educacion Fisica",
        descripcion: "NUMEROS NUMEROS NUMEROS",
        imagen: "https://www.une.edu.pe/uneweb/wp-content/uploads/2020/10/shutterstock_548308483_L-1200x600.jpg"
    }
]

export let registroAsistencias: RegistroAsistencia[] = [
    {
        codRA: "S1",
        nroSesionRA: 1,
        fechaRA: "08/04/2022",
        docenteRA: docentes[0],
        horaInicio: "08:00:00",
        horaFin: "13:00:00",
        Unidad: "I",
        boton: false
    },
    {
        codRA: "S2",
        nroSesionRA: 2,
        fechaRA: "09/04/2022",
        docenteRA: docentes[0],
        horaInicio: "08:00:00",
        horaFin: "13:00:00",
        Unidad: "I",
        boton: false
    },
    {
        codRA: "S3",
        nroSesionRA: 3,
        fechaRA: "10/04/2022",
        docenteRA: docentes[0],
        horaInicio: "08:00:00",
        horaFin: "13:00:00",
        Unidad: "II",
        boton: false
    }
]