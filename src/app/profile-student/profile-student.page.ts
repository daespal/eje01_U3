import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import {Student} from "../models/student"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.page.html',
  styleUrls: ['./profile-student.page.scss'],
})
export class ProfileStudentPage implements OnInit {

  public students: Student;

  constructor(private StudentService:StudentService, private actRoute: ActivatedRoute) { 
  
  }

  ngOnInit() {

    this.actRoute.queryParams.subscribe(
      (params)=>{
        console.log(params);
        this.students = this.StudentService.getStudentByControlNumber(params.controlnumber);
      }
    );
    
  }

  

}
