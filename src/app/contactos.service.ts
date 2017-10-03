import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
// El decorador Injectable indica que la clase decorada
// debe comportarse como un servicio
@Injectable()
export class ContactosService {
  //por defecto todos los atributos son públicos
  //como yo no quiero que sean accesibles desde fuera del módulo, añado private
  //por convención, los private empiezan por _guiónBajo
  private _nombres:Contacto[]=[
    new Contacto (1,"Steve", "Jobs"),
    new Contacto (2,"Steve","Wozniak"),
    new Contacto (3,"Bill","Gates"),
    new Contacto (4,"Sundar","Pichai"),
    new Contacto (5,"Elon","Musk"),
    new Contacto (6,"Bob","Esponja")
  ];

  obtenerContactos(): Contacto[]{
    return this._nombres;
  }

  contactoEliminado(nombre:Contacto):void{
    //console.log(nombre);
    this._nombres=this._nombres.filter(function(n){
      return n.id!==nombre.id;
    });
    //viene a ser lo mismo que n=>n.id!==nombre.id
    //con filter nos quedamos con todos los contactos que no coincidan con n
    //como hemos pasado n=nombre del contacto en el que pincho, lo eliminamos.
    //la magia de Angular radica enq ue se actualiza solo sin pedirle que actualice la template.
  }

  // constructor() { }

}
