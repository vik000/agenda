import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service'

//Usamos el decorador NgModule para que la clase decorada se comporte como un módulo.
@NgModule({
  //Metadatos:
  //En el metadato declarations, indico todos los componentes, pipies y diectivas de mi aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  //En imports indicamos todos aquellos módulos de los cuales mi aplicación depende
  imports: [
    BrowserModule //Este import hace que se vea como una web, para hacer una nativa, importaremos otra cosa.
  ],
  //En providers indicamos todos aquellos proveedores de clase o valores que puedan ser inyectados
  providers: [
    ContactosService
  ],
  //Aquí indicamos el componente raíz a partir del cual se construye toda la aplicación.
  bootstrap: [AppComponent]
})
export class AppModule { }
