import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `
  ]
})
export class TemplateComponent{

  public usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais:"",
    sexo:"Hombre",
    acepta:false
  }

  paises=[{
    codigo:"CRI",
    nombre:"Costa Rica"
  },
  {
    codigo:"MEX",
    nombre:"Mexico"
  },
  {
    codigo:"US",
    nombre:"Estados Unidos"
  }];

  sexos:string[] =["Hombre","Mujer"];

  constructor() { }

  guardar(form:NgForm){
    console.log("Formulario posteado")
    console.log("ngForm: ",form);
    console.log("Valor: ",form.value);
  }

}
