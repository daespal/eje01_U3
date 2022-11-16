import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Student } from './../models/student';
import { StudentService } from './../services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public myForm: FormGroup;
  public validationMessages: Object; //para el mensajito del error 

  constructor(private studentService:StudentService, private fB:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fB.group({
      controlNumber:["",Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('^[0-9]+$')])],//1 que valor tendra y 2 validaciones
      name:["",Validators.compose([Validators.required])]
    }); //esto es para las validaciones y darle formato 

    this.validationMessages = {
      'controlNumber':[{type:'required',message:"Numero de control obligatorio"},{type:'pattern',message:"Numero de control mal formulado"},
      {type:'minlength',message:"Numero de control debe ser de 8 digitos"},{type:'maxlength',message:"Numero de control debe ser de 8 digitos"}],
      'nip':[{type:'required',message:"Nip obligatorio"},{type:'min',message:"Nip mal formulado"}]
      
    }
  }

}
