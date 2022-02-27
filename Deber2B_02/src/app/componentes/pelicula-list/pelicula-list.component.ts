import { Component, OnInit } from '@angular/core';
import {GeneroService} from "../../services/genero.service";
import {PeliculaService} from "../../services/pelicula.service";

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: any;
  currentPelicula: any;
  currentIndex = -1;
  nombre_pelicula = '';

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.retrievePeliculas();
  }

  retrievePeliculas(): void {
    this.peliculaService.getAll()
      .subscribe(
        data => {
          this.peliculas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePeliculas();
    this.currentPelicula = null;
    this.currentIndex = -1;
  }

  setActivePelicula(genero: any, index: number): void {
    this.currentPelicula = genero;
    this.currentIndex = index;
  }

  removeAllPeliculas(): void {
    this.peliculaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePeliculas();
        },
        error => {
          console.log(error);
        });
  }

  searchNombrePelicula(): void {
    this.peliculaService.findByTitle(this.nombre_pelicula)
      .subscribe(
        data => {
          this.peliculas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
