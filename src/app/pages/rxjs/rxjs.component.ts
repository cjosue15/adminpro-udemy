import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  suscripcion: Subscription;

  constructor() {
    this.suscripcion = this.contarTres().subscribe(
      number => {
        console.log(number);
      },
      error => console.log(error),
      () => console.log('obs termino')
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcion.unsubscribe();
  }

  contarTres(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      let idIntervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        // En el next puedes definir lo que devuelves
        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(idIntervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval(idIntervalo);
        //   observer.error('Aiua');
        // }
      }, 1000);
    }).pipe(
      map((response: any) => {
        return response.valor;
      }),
      filter((valor, index) => {
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
