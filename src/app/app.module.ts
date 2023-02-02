import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEncuestaComponent } from './registrar-encuesta/registrar-encuesta.component'
import { FormsModule } from '@angular/forms';
//import { ResultadoEncuestasComponent } from './resultado-encuestas/resultado-encuestas.component';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    ListaEncuestasComponent,
    RegistrarEncuestaComponent,
    //ResultadoEncuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
