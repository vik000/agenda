import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  formulario: FormGroup;
  @Output() botonGuardarPulsado= new EventEmitter<Contacto>();

  //Inyectamos como dependencia FormBuilder.
  //con esta clase podemos crear nuevos FormGroup,
  //indicando las propiedaes que queremos recoger en el form html
  constructor(private _formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  private crearFormulario():void{
    //para crear un nuevo FormGroup debemos indicar en
    //un objeto JSON las propiedades que recogeremos
    //formulario html
    this.formulario=this._formBuilder.group({
      nombre:['',Validators.required],
      apellidos:['', Validators.required]
    });
  }

  notificarGuardadoContacto():void{
    //Tenemos disponible los valores que el usuairo indica que en el formulario
    //a través de la propiedad 'value' del FormGroup
    //console.log(this.formulario.value);
    const contacto:Contacto = this.formulario.value as Contacto;
    this.botonGuardarPulsado.emit(contacto);
  }

}
