import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  nombres:Contacto[];
  //para hacer la inyección de dependencias de un servicio
  //debemos hacerlo en el constructor de la clase.
  //Anotamos un parámetro con el tipo de sercicio a inyectar
  //y añadimos el modificador de acceso correspondiente al parámetro.
  constructor(private _contactosService:ContactosService) {

  }

  ngOnInit():void{ //con void estamos tipando la clase de la función.
    //console.log('Estoy en el hook OnInit! :D');
    this.nombres = this._contactosService.obtenerContactos();
  }

  contactoEliminado(nombre:Contacto):void{
    //console.log(nombre);
    this._contactosService.contactoEliminado(nombre);
    this.nombres = this._contactosService.obtenerContactos(); //con esto estoy actualizando los valores de la lista, que si no no sale
  }

}
