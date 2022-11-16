import { Injectable } from '@angular/core';
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[]; 

  constructor() {
    this.students =[
      {
        controlnumber:"18401173",
        name:"Dalia Esmeralda Palacios",
        age:22,
        curp:"PAFD991126MNTLLL08",
        nip:2600,
        email:"daespalaciosfl@ittepic.edu.mx",
        career:"ISC",
        photo:"https://picsum.photos/450/?random=2"
      },
      {
        controlnumber:"18401186",
        name:"Azucena Conde Flores",
        age:22,
        curp:"CONFLAZU0189298Y49",
        nip:9701,
        email:"azucondefl@ittepic.edu.mx",
        career:"ISC",
        photo:"https://picsum.photos/450/?random=4"
      },
      {
        controlnumber:"18401000",
        name:"Ariana Jazmin Palacios",
        age:22,
        curp:"PAFD991126MNT00972",
        nip:2622,
        email:"daespalaciosfl@ittepic.edu.mx",
        career:"ISC",
        photo:"https://picsum.photos/450/?random=3"
      }
    ];
   }

   public getStudent(): Student[]{
    return this.students
   }

   public removeStudent(pos:number){
    this.students.splice(pos,1);
   }

  public getStudentByControlNumber(cn:string): Student{
    let item: Student;
    item = this.students.find(
      (students)=>{  //formula de flecha 
        return students.controlnumber===cn;
      }
    );
   return item; //esto hace que solo se retorne el alumno que nosotros seleccionamos. 
  }

  public newStudent(student:Student):void{
    this.students.push(student); //el push es solo cuando se inicializaron los arreglos. 
  }

}

//ionic g service services/student