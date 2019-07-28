import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddUsersComponent} from '../add-users/add-users.component' 
import {ViewUserComponent} from '../view-user/view-user.component'
import { from } from 'rxjs';

const routes: Routes = [
{path:'user/add',component:AddUsersComponent},
{path:'user/view',component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AddUsersComponent,ViewUserComponent],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
