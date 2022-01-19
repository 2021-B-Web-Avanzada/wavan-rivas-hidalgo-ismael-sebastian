import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Peliculas} from "../modelos/peliculas";

const enum endpoint {
  lo_ultimo = '/movie/latest',
  reproduciendo = '/movie/now_playing',
  popular = '/movie/popular',
  mejor_valoradas = '/movie/top_rated',
  proximamente = '/movie/upcoming',
  tendencia = '/trending/all/week',
  originales = '/discover/tv'
}


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private URL = 'https://api.themoviedb.org/3'
  private api_key = environment.api;

  constructor(private http: HttpClient) {

  }

  getUltimaPelicula(): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.URL}${endpoint.lo_ultimo}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getReproduciendo(): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.URL}${endpoint.reproduciendo}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginales(): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.URL}${endpoint.originales}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopulares(): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getMejorValoradas(): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.URL}${endpoint.mejor_valoradas}`, {
      params: {
        api_key: this.api_key
      }
    });
  }
  getTendencia(): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${this.URL}${endpoint.tendencia}`, {
      params: {
        api_key: this.api_key
      }
    });
  }
}
