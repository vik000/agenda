import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
// El decorador Injectable indica que la clase decorada
// debe comportarse como un servicio
@Injectable()
export class ContactosService {
  //por defecto todos los atributos son públicos
  //como yo no quiero que sean accesibles desde fuera del módulo, añado private
  //por convención, los private empiezan por _guiónBajo
  constructor(private _httpClient:HttpClient){}


  obtenerContactos(): Observable<Contacto[]>{
    return this._httpClient.get<Contacto[]>(`${environment.rutaApi}/contactos`);
  }

  agregarContacto(contacto:Contacto):Observable<Contacto>{
    //hemos creado esta función que añade al array un contacto que le llegue.
    return this._httpClient.post<Contacto>(`${environment.rutaApi}/contactos`,contacto);
  }


  contactoEliminado(contacto:Contacto):Observable<Contacto>{
    //console.log(nombre);
    return this._httpClient.delete<Contacto>(`${environment.rutaApi}/contactos/${contacto.id}`);
    }
    //viene a ser lo mismo que n=>n.id!==nombre.id
    //con filter nos quedamos con todos los contactos que no coincidan con n
    //como hemos pasado n=nombre del contacto en el que pincho, lo eliminamos.
    //la magia de Angular radica enq ue se actualiza solo sin pedirle que actualice la template.

}
