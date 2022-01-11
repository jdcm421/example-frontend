import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrigenServiceService {

  URL = "http://34.73.56.49/";

  constructor(
    private http : HttpClient,
  ) { }



  listar(){
    return this.http.get(this.URL + "api/clientes/list");
  }

  registrar(data:any)
  {

    return this.http.post(this.URL+"api/clientes/crea", data);
  }

  variacion()
  {
    return this.http.get(this.URL + "api/clientes/kpi");
  }
}
