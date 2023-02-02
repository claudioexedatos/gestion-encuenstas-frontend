import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../encuesta';
import { EncuestaService } from '../encuesta.service';

@Component({
  selector: 'app-lista-encuestas',
  templateUrl: './lista-encuestas.component.html',
  styleUrls: ['./lista-encuestas.component.css']
})
export class ListaEncuestasComponent implements OnInit {
  
  encuestados:Encuesta[];

  constructor(private encuestaServicio:EncuestaService){}
  
  ngOnInit(): void {
    this.obtenerEncuestas();
  }

  private obtenerEncuestas(){
    this.encuestaServicio.obtenerListaDeEncuestas().subscribe(dato => {
      this.encuestados = dato;
    });
  }

}
