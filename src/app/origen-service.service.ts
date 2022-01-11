import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrigenServiceService {

  constructor(
    private router : Router,
    private http : HttpClient,
  ) { }

  listar(){
    return this.http.get('http://34.73.56.49:80/api/clientes/list');
  }

  registrar(data:any)
  {
    return this.http.post('http://34.73.56.49:80/api/clientes/crea',data);
  }

  variacion()
  {
    return this.http.get('http://34.73.56.49:80/api/clientes/kpi');
  }
}
