import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileStudentPage } from './profile-student.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileStudentPageRoutingModule {}
