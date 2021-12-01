import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {
  cedulaR: String;
  cedulaE: String;
  cantidad: String;
  res:any;
  bancoS: String
  bancoE: number
  bancoR: number
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  transferencia(){
    console.log("entra transferencia")
    if(this.bancoS == "bA"){
      this.bancoE = 1
      this.bancoR = 2
    }else if(this.bancoS == "bP"){
      this.bancoE = 2
      this.bancoR = 1
    }
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.put('http://localhost:8000/transferencia/'+this.cedulaE+"/"+this.cedulaR+"/"+this.cantidad+"/"+this.bancoE+"/"+this.bancoR,headers)
    .subscribe((response)=>{console.log(response)});
    console.log("Datos : " + this.cedulaE + this.cedulaR + this.cantidad + this.bancoE);
  }

}
