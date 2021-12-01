import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.page.html',
  styleUrls: ['./retirar.page.scss'],
})
export class RetirarPage implements OnInit {

  cedula: String;
  cantidad: String;
  res:any;
  bancoP: number

  constructor(private http: HttpClient ) { }

  ngOnInit() {
  }

  retirarP(){
    this.bancoP=2
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.put('http://localhost:600/retirar/'+this.cedula+"/"+this.cantidad,headers).subscribe((res)=>{console.log(res)});
    console.log("termina depositar" + this.bancoP)
  }

}
