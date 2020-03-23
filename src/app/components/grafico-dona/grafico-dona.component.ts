import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})

export class GraficoDonaComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() type: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
