import { Student } from './../models/student';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public student: Student;
  public myForm: FormGroup;
  public validationMessages: Object; //para el mensajito del error 

  constructor(private studentService:StudentService, private fB:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fB.group({
      controlNumber:["",Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('^[0-9]+$')])],//1 que valor tendra y 2 validaciones
      name:["",Validators.compose([Validators.required])],
      curp:["",Validators.compose([Validators.required,Validators.minLength(18),Validators.maxLength(18),Validators.pattern('[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')])],
      edad:[17,Validators.compose([Validators.required,Validators.min(17)])],
      nip:["",Validators.compose([Validators.required,Validators.min(10),Validators.max(10000)])],
      email:["",Validators.compose([Validators.required,Validators.email])],
      career:["",Validators.compose([Validators.required])],
      urlphoto:["",Validators.compose([Validators.required,Validators.pattern('^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$')])],
    }); //esto es para las validaciones y darle formato 

    this.validationMessages = {
      'controlNumber':[{type:'required',message:"Numero de control obligatorio"},{type:'pattern',message:"Numero de control mal formulado"},
      {type:'minlength',message:"Numero de control debe ser de 8 digitos"},{type:'maxlength',message:"Numero de control debe ser de 8 digitos"}],
      'name':[{type:'required',message:"Nombre obligatorio"}],
      'curp':[{type:'required',message:"CURP obligatorio"},{type:'pattern',message:"CURP mal formulado"},
      {type:'minlength',message:"CURP debe ser de 18 digitos"},{type:'maxlength',message:"CURP debe ser de 18 digitos"}],
      'edad':[{type:'required',message:"Edad obligatorio"},{type:'min',message:"Edad mayor a 17"}],
      'nip':[{type:'required',message:"Nip obligatorio"},{type:'min',message:"Nip mal formulado"}],
      'email':[{type:'required',message:"Email obligatorio"},{type:'email',message:"Email mal formulado"}],
      'urlphoto':[{type:'required',message:"URL obligatorio"},{type:'pattern',message:"URL mal formulado"}],
      'career':[{type:'required',message:"Carrera obligatoria"}]
    }
  }

  public newStudent():void{
    //construir el objeto
    this.studentService.newStudent(this.student);
  }

}
