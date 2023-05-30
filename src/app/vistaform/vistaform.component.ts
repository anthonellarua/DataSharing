import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-vistaform',
  templateUrl: './vistaform.component.html',
  styleUrls: ['./vistaform.component.css']
})

export class VistaformComponent implements OnInit {
  datosFormulario: any;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit() {
    // Obtener los datos del servicio
    this.datosFormulario = this.dataSharingService.getDatos();
  }
}