import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login:string='';
  password:string='';
  confirmPassword:string='';
  loading:boolean=false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router:Router,
    private _errorService:ErrorService
  ){}
  ngOnInit(): void {}
  addUser(){
    if(this.login=='' || this.password=='' || this.confirmPassword==''){
      this.toastr.error('Todos los campos son obligatorios!', 'Error');
      return;
    }
    if(this.password!=this.confirmPassword){
      this.toastr.error('Los passwords son diferentes', 'Error');
      return;
    }
    const user:User={
      login:this.login,
      password:this.password
    }
    this.loading=true;    
    this._userService.signIn(user).subscribe({
      next:(v)=>{
        this.loading=false;
        this.toastr.success(`El usuario ${this.login} fue registrado exitosamente`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error:(e:HttpErrorResponse)=>{
        this.loading=false;
        this._errorService.msgError(e);
      }
    })
  }
}