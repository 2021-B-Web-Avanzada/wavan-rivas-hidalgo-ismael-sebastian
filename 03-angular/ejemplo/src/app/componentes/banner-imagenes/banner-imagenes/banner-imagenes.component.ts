import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {
  nombre = 'Ismael';
  apellido = 'Rivas';
  mascotas = {
    capu: {
      edad: 6
    }
  }
  fecha = new Date();
  sueldo = 1000;

  @Input()
  url = 'https://www.google.com';

  @Input()
  urlImagen = 'https://scontent.fcue10-1.fna.fbcdn.net/v/t1.6435-9/39265653_2130162497251481_4413197781334753280_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=QrtXZ70dI2kAX_2gO9m&_nc_ht=scontent.fcue10-1.fna&oh=00_AT9qnLZT-7pPgtoWKFrxmf4r-IVJJgXJhWGLL6b28Q_Muw&oe=61E9DFAA';

  @Input()
  color = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

  ejecutarEventoClick() {
    console.log({mensaje: 'click'});
  }
  ejecutarEventoBlur() {
    console.log({mensaje: 'blur'});
  }

}
