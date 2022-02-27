import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-add-genero',
  templateUrl: './add-genero.component.html',
  styleUrls: ['./add-genero.component.css']
})
export class AddGeneroComponent implements OnInit {
  genero = {
    nombre_genero: '',
    num_subgeneros: 0,
    genero_activo: false,
    genero_ganancias: 0.0,
  };
  submitted = false;

  constructor(private generoService: GeneroService) { }

  ngOnInit(): void {
  }

  saveGenero(): void {
    const data = {
      nombre_genero: this.genero.nombre_genero,
      num_subgeneros: this.genero.num_subgeneros,
      genero_ganancias: this.genero.genero_ganancias,
      genero_activo: false
    };

    this.generoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGenero(): void {
    this.submitted = false;
    this.genero = {
      nombre_genero: '',
      num_subgeneros: 0,
      genero_activo: false,
      genero_ganancias: 0.0
    };
  }
}
