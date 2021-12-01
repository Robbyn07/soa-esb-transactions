import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.page.html',
  styleUrls: ['./depositar.page.scss'],
})
export class DepositarPage implements OnInit {

  cedula: String;
  cantidad: String;
  res:any;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  depositarA(){
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.put('http://localhost:5000/depositar/'+this.cedula+"/"+this.cantidad,headers).subscribe((res)=>{console.log(res)});
    console.log("termina depositar" + this.cantidad)
  }

}
