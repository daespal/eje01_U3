import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileStudentPageRoutingModule } from './profile-student-routing.module';

import { ProfileStudentPage } from './profile-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileStudentPageRoutingModule
  ],
  declarations: [ProfileStudentPage]
})
export class ProfileStudentPageModule {}
