import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

nuevo: Personaje={
  nombre: 'satan',
  poder: 1000,
}
constructor(){}

}
