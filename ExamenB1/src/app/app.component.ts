import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {Peliculas} from "./modelos/peliculas";
import {PeliculaService} from "./servicios/pelicula.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  sticky = false;
  subs: Subscription[] = [];
  tendencia: Peliculas;
  popular: Peliculas;
  mejor_valoradas: Peliculas;
  originales: Peliculas;
  reproduciendo: Peliculas;
  proximamente: Peliculas;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  @ViewChild('stickHeader')
  header: ElementRef;
  headerBGUrl: string;

  constructor(private pelicula: PeliculaService) {
  }

  ngOnInit(): void {
    this.subs.push(this.pelicula.getTendencia().subscribe(data => {
      this.tendencia = data;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.tendencia.results![1].backdrop_path ;
    }));
    this.subs.push(this.pelicula.getPopulares().subscribe(data => this.popular = data));
    this.subs.push(this.pelicula.getMejorValoradas().subscribe(data => this.mejor_valoradas = data));
    this.subs.push(this.pelicula.getOriginales().subscribe(data => this.originales = data));
    this.subs.push(this.pelicula.getReproduciendo().subscribe(data => this.reproduciendo = data));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    this.sticky = windowScroll >= this.header.nativeElement.offsetHeight;
  }
}
