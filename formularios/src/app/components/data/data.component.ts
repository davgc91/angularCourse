import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'; 

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:any = {
    nombrecompleto: { 
      nombre:"David",
      apellido:"Gonzalez"
    },
    correo:"david@gmail.com",
    pasatiempos: ["Correr" ]

  };


  constructor() { 

    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto' : new FormGroup({
          'nombre': new FormControl( '' 
                                         ,[Validators.required
                                         ,Validators.minLength(3)]),
          'apellido': new FormControl(''
                                      ,Validators.required)
      }),      
      'correo': new FormControl(''
                                      ,[Validators.required
                                      ,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
       'pasatiempos': new FormArray([
         new FormControl('Correr', Validators.required)
         //new FormControl('Dormir', Validators.required),
         //new FormControl('Comer', Validators.required)
       ])
    });

    this.forma.setValue(this.usuario  );

  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir',Validators.required)
    )
  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);

    this.forma.reset(this.usuario);

  }

  

}
