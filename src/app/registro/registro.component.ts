import { OrigenServiceService } from './../origen-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre = "";
  apellido= "";
  edad =  0;
  fechaNacimiento = "";
  result: any;
  message:any;

  constructor(private service : OrigenServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit()
  {
    let request: any = {};
    request["nombre"] = this.nombre;
    request["apellido"] = this.apellido;
    request["edad"] = this.edad;
    request["fechaNacimiento"] = this.fechaNacimiento;
    console.log(request);
    this.service.registrar(request).subscribe(data => {
      console.log(data);
      this.result = data;
      if(this.result.message == "OK"){
        this.router.navigateByUrl('cliente');
      }else{
        this.message = '<div class="alert alert-danger my-3" role="alert">'+
        ''+ this.result.message
      +'</div>';
      }
    }, error => {
      console.error(error);
    })
  }
}
