import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encuesta } from '../encuesta';
import { EncuestaService } from '../encuesta.service';

@Component({
  selector: 'app-registrar-encuesta',
  templateUrl: './registrar-encuesta.component.html',
  styleUrls: ['./registrar-encuesta.component.css']
})
export class RegistrarEncuestaComponent implements OnInit {

  encuesta : Encuesta = new Encuesta();
  constructor(private encuestaServicio:EncuestaService,private router:Router) { }

  ngOnInit(): void { 
    console.log(this.encuesta,"aqui pasé");
  }
  guardarEncuesta(){
    swal({
      title: '¿Está seguro de enviar la encuesta?',
      text: "Confirma si deseas finalizar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , Finalizar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.encuestaServicio.registrarEncuesta(this.encuesta).subscribe(dato => {
          console.log(dato);
          this.guardarEncuesta();
          swal(
            'Encuesta ingresada a la base de datos',
            'La encuesta se ingresó con éxito.',
            'success'
          )
        })
      }
    })

  }

  onSubmit(){
    this.guardarEncuesta();
  }

}
