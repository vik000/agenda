import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent {

  nombres:Contacto[];

  constructor(
    private _contactosService:ContactosService,
    private _router: Router
  ) { }

  crearContacto(contacto:Contacto):void{
    //vamos a buscar el servicio.
    this._contactosService.agregarContacto(contacto);
    this._router.navigate(['/lista-contactos']);
  }

}
