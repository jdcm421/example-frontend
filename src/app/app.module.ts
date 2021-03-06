import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrigenServiceService } from './origen-service.service';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './registro/registro.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DashboardComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    NgbModule
  ],
  providers: [OrigenServiceService,
  {provide: HTTP_INTERCEPTORS,useClass: InterceptorService ,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
