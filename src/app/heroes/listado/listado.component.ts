import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

 heroes: string[]=['Spiderman','Ironman','Hulk','Thor'];
 heroeborrado: string='';

 borrarheroe(){
   console.log('borrando...');
   this.heroeborrado = this.heroes.shift() || '';
 }
 }


