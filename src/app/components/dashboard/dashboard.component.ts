import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ListService } from 'src/app/services/list.service';
// import { SegUsuarioService } from 'src/app/services/seg_usuario.service';
import { ErrorService } from 'src/app/services/error.service';
import { ToastrService } from 'ngx-toastr';
//import { seg_usuario } from 'src/app/interfaces/seg_usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  columnsNames: any[]=[];
  listObject: any[]=[];
  //listHeadersSegUsuario: any[]=[];
  constructor(
    // private _seg_usuario_Service: SegUsuarioService
    private toastr: ToastrService,
    private _listService: ListService,
    private _errorService: ErrorService,
  ){}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this._listService.getAll('ipp','vw_seg_usuario_lis').subscribe(data=>{
      this.columnsNames=Object.keys(data[0]);
      this.listObject=data;
    })
    // this._seg_usuario_Service.getAllSegUsuario('ipp','seg_pagina').subscribe(data=>{
    //   console.log(data);
    // })
  }
  getWhere(){
    this._listService.getWhere('ipp','seg_usuario',"apiestado='ELABORADO'").subscribe(data=>{
      this.columnsNames=Object.keys(data[0]);
      this.listObject=data;
    })
  }
  getColumn(){
    this._listService.getColumn('ipp','seg_usuario','id_usuario','2000').subscribe(data=>{
      this.columnsNames=Object.keys(data[0]);
      this.listObject=data;
    })
  }
  // getHeaders(){
  //   this._listService.getHeaders('ipp','seg_usuario').subscribe(data=>{
  //     console.log(data);
  //     this.listHeadersSegUsuario=data;
  //   })
  //   // this._seg_usuario_Service.getAllSegUsuario('ipp','seg_pagina').subscribe(data=>{
  //   //   console.log(data);
  //   // })
  // }
  getFunction(){
    this._listService.getFunction('public','fn_ipp_indice_ipp').subscribe(data=>{
      this.columnsNames=Object.keys(data[0]);
      this.listObject=data;
    })
  }
  putApiestado(){
    this._listService.putApiestado('ipp','seg_usuario','ELABORADO','stag','id_usuario=2538').subscribe({
      next:(token)=>{
        localStorage.setItem('token',token);
        this.toastr.success('Se modificaron los datos correctamente','Actualizacion');
      },
      error:(e:HttpErrorResponse)=>{
        this._errorService.msgError(e);
      }
    })
  }
}
