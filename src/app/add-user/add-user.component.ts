import { Component, OnInit, Inject } from '@angular/core';
import {Http} from '@angular/http';
import apis from "../../apis.js"

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
  // ===========  Pagination  ============
  p: number = 1;

  disabled=false;
  ngOnInit() {
    this.getUsers();
  }
  // ==========  filters  =========
  oreder='firstName';search=''
  orderBy(order){
    this.oreder=order;
  }
  // ========== end filters  =========

  temp=0;e_firstName;e_lastName;e_empId;
  editUserData(user){
    this.temp=user._id
    this.e_firstName=user.firstName;
    this.e_lastName=user.lastName;
    this.e_empId=user.empId;
    this.disabled=true;
  }
  // ==============  update user data  ==============
  saveUserData(user){
    var updateUser={
      _id:user._id,
      firstName:this.e_firstName,
      lastName:this.e_lastName,
      empId:this.e_empId,
      projectId:user.projectId,
      taskId: user.taskId
    };
    // console.log(user)
    // console.log(updateUser)
    this.http.post(apis.updateUser,[user,updateUser]).subscribe(dt=>{
      // alert(dt._body)
      this.temp=0;
      this.disabled=false;
      this.ngOnInit()
    })
  }
  cancelUserData(){
    this.temp=0;
    this.disabled=false;
  }
  firstName;
  lastName;
  empId;
  errorValidation=false;existUser=false;
  addUser(formvalidation){
    if(formvalidation.valid){
      this.http.post(apis.addUser,{firstName:this.firstName,lastName:this.lastName,empId:this.empId}).subscribe(result=>{
        console.log(result);
        if(JSON.parse(result._body).status == 200){
          this.ngOnInit()
          this.firstName='';
          this.lastName='';
          this.empId='';
          this.existUser=false;
        }else{
          // alert("emplyee id Existed")
          this.existUser=true;
        }
      }) 
    }else{
      this.errorValidation=true;
    }
  }
  reset(){
    this.firstName='';
    this.lastName='';
    this.empId='';
    this.existUser=false;
  }

  //=============    get users data   ===============
  users;
  getUsers(){
    this.http.get(apis.getUsers).subscribe(data=>{
      this.users=JSON.parse(data._body)
      // console.log(JSON.parse(data._body))
    })
  }

  // ===============  delete user   ================
  deleteUser(user){
    this.http.post(apis.deletUser,{_id:user._id}).subscribe(dt=>{
      // alert(dt._body)
      this.getUsers();
    })
  }

}
