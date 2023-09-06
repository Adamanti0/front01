import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { seg_usuario } from 'src/app/interfaces/seg_usuario';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _loginService: LoginService,
    private _errorService: ErrorService,
    private router:Router
  ){}
  ngOnInit():void{}
  loginUser(){
    if(this.login==''||this.password==''){
      this.toastr.error('Todos los campos son obligatorios','Error');
      return;
    }
    const user:seg_usuario={
      login:this.login,
      password:this.password
    }
    this.loading=true;
    this._loginService.login(user).subscribe({
      next:(token)=>{
        localStorage.setItem('token',token)
        this.router.navigate(['/dashboard']);
      },
      error:(e:HttpErrorResponse)=>{
        this._errorService.msgError(e);
        this.loading=false;
      }
    })
  }
}