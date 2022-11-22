
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Student} from "../models/student"
import {StudentService} from "../services/student.service"
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];
  public pos:number;
  handlerMessage = '';

  constructor(private StudentService:StudentService, public navCtrl:NavController, private router: Router,private alertController: AlertController) { 
    this.students = this.StudentService.getStudent(); //todos los alumnos que queramos con este get. 
  }

  profile(){
    this.navCtrl.navigateForward("/profile-student");
  
  } 

  async presentAlert(i:number) {
    const alert = await this.alertController.create({
      header: '¿Quiere borrar este estudiante?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            this.removeStudent(i);
          
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
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
