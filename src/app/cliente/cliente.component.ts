import { OrigenServiceService } from './../origen-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaclientes:any;

  constructor(
    private service : OrigenServiceService
  ) { }

  ngOnInit(): void {
    this.clientas();
  }

  clientas()
  {
    this.service.listar().subscribe(data =>{
      console.log(data);
      this.listaclientes=data;
    }, error => {
      console.error(error);
      this.listaclientes = [];
    });
  }
}
