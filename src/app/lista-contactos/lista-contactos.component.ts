import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Contacto} from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {
//con output exponemos un evento para que un componente padre pueda suscribirse a él.
//debe ser un EventEmitter
  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();
  @Output() contactoSeleccionado = new EventEmitter<Contacto>();

  @Input() contactos:Contacto[]; //declaro el atributo contactos y lo decoro con Input para que el componente padre pueda meterle cosas.
  notificarEliminacionContacto(contacto:Contacto):void{
    //notificamos datos al componente padre gracias a la función
    //EMIT de nuestro EventEmitter
    this.botonEliminarPulsado.emit(contacto);
  }
  notificarSeleccion(contacto:Contacto):void{
    this.contactoSeleccionado.emit(contacto);
  }
}
