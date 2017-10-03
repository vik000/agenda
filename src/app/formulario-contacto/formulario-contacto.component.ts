import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  formulario: FormGroup;

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
      nombre:'',
      apellidos:''
    });
  }

  guardarContacto():void{
    //Tenemos disponible los valores que el usuairo indica que en el formulario
    //a través de la propiedad 'value' del FormGroup
    console.log(this.formulario.value);
  }

}
