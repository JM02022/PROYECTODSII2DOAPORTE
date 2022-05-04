import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required)
  })
  constructor(private router:Router,private service:LoginServiceService) { 

  }

  ngOnInit(): void {
  }
  public DatosCorrectos:boolean = false;
  validar(form: FormGroup):void{
    if( this.service.buscarRol(this.login.value.usuario,this.login.value.contrasenia)   > -1){
      console.log("correcto")
       this.router.navigate(['perfil']);
    }
    else{
      console.log("datos incorrectos")
      this.DatosCorrectos = true;
      setTimeout(()=>{
        this.DatosCorrectos = false;
      },2000);
    }
    console.log(form)
    //https://www.flaticon.com/premium-icon/students_2995620?related_id=2995620&origin=search
  }

}
