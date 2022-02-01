import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
  styleUrls: ['./modal-ejemplo.component.scss']
})
export class ModalEjemploComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
}
