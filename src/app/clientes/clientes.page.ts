import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes = []

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:600/')  //https://rickandmortyapi.com/api/character
      .subscribe(res=> {
        console.log("llega 1")
        console.log(res);
        this.clientes = res;
      } )
  }

}
