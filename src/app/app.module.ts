import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng5SliderModule } from 'ng5-slider';
import {NgxPaginationModule} from 'ngx-pagination';
import {KeyFilterModule} from 'primeng/keyfilter';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


// import {UsersModuleModule} from '../app/User-Components/users-module/users-module.module'


import { AppComponent } from './app.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { AddUsersComponent } from './User-Components/add-users/add-users.component';
import { ViewUserComponent } from './User-Components/view-user/view-user.component';
import { from } from 'rxjs';


var rt:Routes=[
  { path:'',component:ProjectManagerComponent},
{ path:'addProject',component:AddProjectComponent},
{ path:'addTask',component:AddTaskComponent},
{path:'addUser',component:AddUserComponent},
{path:'viewTask',component:ViewTaskComponent}];

var rout =RouterModule.forRoot(rt)

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent, AddTaskComponent, AddUserComponent, ViewTaskComponent, ProjectManagerComponent, AddUsersComponent, ViewUserComponent
  ],
  imports: [
    BrowserModule,RouterModule,rout,FormsModule,HttpModule,OrderModule,FilterPipeModule,
    Ng2SearchPipeModule,Ng5SliderModule,NgxPaginationModule,KeyFilterModule,DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
