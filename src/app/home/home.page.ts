
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Student} from "../models/student"
import {StudentService} from "../services/student.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];
  public pos:number;
  
  constructor(private StudentService:StudentService, public navCtrl:NavController, private router: Router) { 
    this.students = this.StudentService.getStudent(); //todos los alumnos que queramos con este get. 
  }

  profile(){
    this.navCtrl.navigateForward("/profile-student");
  
  } 

  public removeStudent(pos:number){
    this.StudentService.removeStudent(pos);
    this.students = this.StudentService.getStudent();
  }

  getPosition():number{
      return this.pos;
  }

  public getStudentByControlNumber(cn: string): void{
      this.router.navigate(['/profile-student'],{
       queryParams:{
        controlnumber:cn
       } 
      });
  }

  public addStudent(){
  this.router.navigate(['new-student']);
}
}
