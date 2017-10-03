import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';

@Component({
  selector: 'app-root', //Esto crea el tag html
  templateUrl: './app.component.html', //Esto son los html y css del encapsulado.
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    // nombres2:string[]=[
    //   "Calamardo",
    //   "Patricio"
    // ];
    //
    // nombres3:string[]=[
    //   "Chiquito de la Calzada"
    // ];
 nombres:Contacto[];

//para hacer la inyección de dependencias de un servicio
//debemos hacerlo en el constructor de la clase.
//Anotamos un parámetro con el tipo de sercicio a inyectar
//y añadimos el modificador de acceso correspondiente al parámetro.
constructor(private _contactosService:ContactosService){
  console.log('Componente isntanciad y servicio inyectado');
}

  ngOnInit():void{ //con void estamos tipando la clase de la función.
    console.log('Estoy en el hook OnInit! :D');
    this.nombres = this._contactosService.obtenerContactos();
  }
  contactoEliminado(nombre:Contacto):void{
    //console.log(nombre);
    this._contactosService.contactoEliminado(nombre);
    this.nombres = this._contactosService.obtenerContactos(); //con esto estoy actualizando los valores de la lista, que si no no sale
  }
}
