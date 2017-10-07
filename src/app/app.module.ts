import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { RutaAComponent } from './ruta-a/ruta-a.component';
import { RutaBComponent } from './ruta-b/ruta-b.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';

//Usamos el decorador NgModule para que la clase decorada se comporte como un módulo.
@NgModule({
  //Metadatos:
  //En el metadato declarations, indico todos los componentes, pipies y diectivas de mi aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    RutaAComponent,
    RutaBComponent,
    DetallesContactoComponent
  ],
  //En imports indicamos todos aquellos módulos de los cuales mi aplicación depende
  imports: [
    BrowserModule, //Este import hace que se vea como una web, para hacer una nativa, importaremos otra cosa.
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //En providers indicamos todos aquellos proveedores de clase o valores que puedan ser inyectados (servicios y dependendencias, por ejemplo)
  //Cli no nos lo mete por defecto al generarlo como hace con componentes
  //Hay que meterlo a mano cuando creamos un servicio/dependencia.
  //Ojo por si hay que importarlo arriba también.
  providers: [
    ContactosService
  ],
  //Aquí indicamos el componente raíz a partir del cual se construye toda la aplicación.
  bootstrap: [AppComponent]
})
export class AppModule { }
