import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaformComponent } from './vistaform/vistaform.component';

const routes: Routes = [
  { path: 'vistaform', component: VistaformComponent },
  { path: '', component:FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
