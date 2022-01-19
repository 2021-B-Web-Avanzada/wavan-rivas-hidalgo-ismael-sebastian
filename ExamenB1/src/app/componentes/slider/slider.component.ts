import {Component, Input, OnInit} from '@angular/core';
import {Peliculas} from "../../modelos/peliculas";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() sliderConfig;

  @Input() peliculas: Peliculas;

  @Input() title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
