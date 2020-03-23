import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje', { static: false }) txtPorcentaje: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(newValue: number) {

    if (newValue) {
      console.log(newValue);

      if (newValue >= 100) {
        this.porcentaje = 100;
      }

      if (newValue <= 0) {
        this.porcentaje = 0;
      }

    } else {
      this.porcentaje = 0;
    }

    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje)
  }

  cambiarValor(valor: number) {

    const numero = Number(this.porcentaje)

    if (numero >= 100 && valor > 0) {
      this.porcentaje = 100
      return;
    }

    if (numero <= 0 && valor < 0) {
      this.porcentaje = 0
      return;
    }

    this.porcentaje = numero + valor;

    this.cambioValor.emit(this.porcentaje);

    this.txtPorcentaje.nativeElement.focus();

  }

}
