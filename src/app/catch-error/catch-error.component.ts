import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of('Welcome Gente', 'como estan?', 'Hola Gente')
    .pipe(
      map((v) => {
        if (v === 'Hola Gente') {
          throw new Error('Saludo incorrecto');
        }
        return v;
      }),
      catchError((err) => {
        throw new Error('Error' + err);
      })
    ).subscribe(
      (s) => console.log('Next: ' + s),
      (err) => console.error('Err: ' + err)
    );

  }

}
