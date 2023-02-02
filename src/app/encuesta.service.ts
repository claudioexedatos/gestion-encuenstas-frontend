import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encuesta } from './encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  // esta url retorna las encuestas desde el endpoint del back-end
  private baseURL = "http://localhost:8080/api/v1/encuestas";

  constructor(private httpClient : HttpClient) { }

  //Este método me sirve para obtener las encuestas y retorna un json
  obtenerListaDeEncuestas(): Observable<Encuesta[]>{ 
    return this.httpClient.get<Encuesta[]>(`${this.baseURL}`);
    
  }

  //este metodo nos sirve para guardar la encuesta
  registrarEncuesta(encuesta:Encuesta) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,encuesta);
  }
  

  
}
