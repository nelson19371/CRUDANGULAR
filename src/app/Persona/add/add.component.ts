import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { HttpEvent, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
  
})
export class AddComponent implements OnInit {
  
  per:Persona = new Persona();
  constructor(private router:Router, private service:ServiceService) {}

  ngOnInit() {
    
  }

  Guardar(nombre:String, apellidos: String){    
    this.per.name = nombre;
    this.per.apellidos = apellidos;
    this.service.createPersona(this.per)
    .subscribe(
      (response: Persona) => {
        alert("Se agregó con Éxito.");
        this.router.navigate(["listar"]);
      },
      (error) => {
        console.error("Error en la solicitud:", error);
        alert("Hubo un error al intentar agregar.");
      }
    );
  }



}
