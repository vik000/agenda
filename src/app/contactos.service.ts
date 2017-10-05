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
    new Contacto (1,"Steve", "Jobs", "555 666 777", 'steve.jobs@apple.com'),
    new Contacto (2,"Steve","Wozniak", "565 676 777", 'steve.wozniak@apple.com'),
    new Contacto (3,"Bill","Gates", "556 256 123", 'bill.gates@microsoft.com'),
    new Contacto (4,"Sundar","Pichai", null, 'sundar.pichai@google.com'),
    new Contacto (5,"Elon","Musk", "555 666 745", 'elon.musk@tesla.com'),
    new Contacto (6,"Bob","Esponja", "999 668 677", 'bob.esponja@dibus.com')
  ];

  obtenerContactos(): Contacto[]{
    return this._nombres;
  }

  agregarContacto(contacto:Contacto):void{
    //hemos creado esta función que añade al array un contacto que le llegue.
    this._nombres.push(contacto);
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
