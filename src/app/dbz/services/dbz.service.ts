import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class dbzservice{
  private _personajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 5000,
    },
    {
      nombre: 'Vegeta',
      poder: 2000,
    }
    ];
    get personajes(): Personaje[]{
      return [...this._personajes];
    }
constructor(){

}
agregarpersonaje( personaje: Personaje){
this._personajes.push(personaje);
}
}
