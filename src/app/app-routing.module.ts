import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Encuesta } from './encuesta';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { RegistrarEncuestaComponent } from './registrar-encuesta/registrar-encuesta.component';


const routes: Routes = [
  {path : 'registrar-encuesta', component : RegistrarEncuestaComponent},
  {path : 'encuestados', component:ListaEncuestasComponent},
  {path : '', redirectTo:'registrar-encuesta', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
