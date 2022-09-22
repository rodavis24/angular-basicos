import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'SuperMan']

  heroeBorrado: string = '';
  borrarHeroe(): void {
    console.log('Borrando....');
     this.heroeBorrado = this.heroes.shift() || '';

  }

  // constructor() {

  //  }

  ngOnInit(): void {
    ;
  }

}
