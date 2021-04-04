import { Component, OnInit } from '@angular/core';
import {Observable, Observer, of, pipe} from 'rxjs';
import { map, filter, tap, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myObserver: Observer<any> = {
      next : x => {
        console.log(x);
      },
      error: err => console.error(`AHHH TE EQUIVOCASTE`, err),
      complete: () => console.log('mi trabajo aqui esta realizado')
    };

    const myObservable = new Observable(
      subscriber => {
        subscriber.next('holis');
        subscriber.next(10);
        subscriber.next(20);
        // subscriber.complete();
        subscriber.error('Holis soy un error jiji');
      }
    );
    const myObservable2 = new Observable(
      subscriber => {
        subscriber.complete();
      }
    );

    // myObservable.subscribe(myObserver);
    // myObservable2.subscribe(myObserver);

    myObservable.pipe(
      filter((val: number) => !isNaN(val)),
      map((r: number) => {
       return r + 10;
      })
    ).subscribe(myObserver);

    // Ejemplo 2
    // const source = of('World').pipe(
    //   map(x => `Hello ${x}!`),
    //   tap(ev => console.log(ev + 'asdasd')),
    //   delay(5000),
    //   scan((acc, one) => acc + one, 'Holis '),
    //   filter(x => x.includes('pepe'))
    // );

    // source.subscribe(console.log);

    // Custom operators
    const toggle = () =>
      pipe(
        scan((acc, value: any) => {
          const newValue = value.a;
          if (newValue %2 === 0){
            acc.push(newValue);
          }
          return acc;
        }, [0]),
        tap((v) => console.log(v))
      );

    const fakeData = [
      {a: 1},
      {a: 2},
      {a: 3},
      {a: 4}
    ];

    const source = of(...fakeData).pipe(
      toggle(),
      // map(x => `Hello ${x.a}!`)
      map(x => `Hello ${x}!`)
    );

    source.subscribe(console.log);
  }

}
