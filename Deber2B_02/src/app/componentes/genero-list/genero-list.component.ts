import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  generos: any;
  currentGenero: any;
  currentIndex = -1;
  nombre_genero = '';

  constructor(private generoService: GeneroService) { }

  ngOnInit(): void {
    this.retrieveGeneros();
  }

  retrieveGeneros(): void {
    this.generoService.getAll()
      .subscribe(
        data => {
          this.generos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGeneros();
    this.currentGenero = null;
    this.currentIndex = -1;
  }

  setActiveGenero(genero: any, index: number): void {
    this.currentGenero = genero;
    this.currentIndex = index;
  }

  removeAllGeneros(): void {
    this.generoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveGeneros();
        },
        error => {
          console.log(error);
        });
  }

  searchNombreGenero(): void {
    this.generoService.findByTitle(this.nombre_genero)
      .subscribe(
        data => {
          this.generos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
