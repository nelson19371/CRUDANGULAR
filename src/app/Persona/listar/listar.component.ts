import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{


    personas:Persona[] | undefined;
  
    constructor(private service:ServiceService, private router: Router){
  
    }
  
    ngOnInit(){
      this.service.getPersonas()
      .subscribe(data=>{this.personas=data});

      
    }
    Editar(persona: Persona): void {
      if (persona.id !== undefined) {
        localStorage.setItem("id", persona.id.toString());
        this.router.navigate(["edit"]);
      } else {
        console.error("El ID de la persona es indefinido.");
      }
    }

    
  
    Nuevo(){
  
      this.router.navigate(["add"]);
    }

}
