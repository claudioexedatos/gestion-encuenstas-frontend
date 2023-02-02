import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEncuestaComponent } from './registrar-encuesta/registrar-encuesta.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListaEncuestasComponent,
    RegistrarEncuestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
