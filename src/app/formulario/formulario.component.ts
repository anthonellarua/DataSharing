import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  formularioValido: boolean = false;

  constructor(private router: Router, private dataSharingService: DataSharingService) { }

  validarFormulario() {
    this.formularioValido = this.nombre && this.email ? true : false;
  }

  onSubmit() {
    if (window.confirm('¿Estás seguro de enviar el formulario?')) {
      console.log('Formulario enviado');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);
      this.router.navigate(['vistaform']);

      this.dataSharingService.setDatos({
        nombre: this.nombre,
        email: this.email
      });
    }
    
  }
}
