import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, of } from 'rxjs';

@Component({
  selector: 'app-subject-replay-behavior',
  templateUrl: './subject-replay-behavior.component.html',
  styleUrls: ['./subject-replay-behavior.component.css']
})
export class SubjectReplayBehaviorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Emite solo el ultimo estado
    // const saludo = new BehaviorSubject('Welcome Gente');

    // Emite todos los estados
    const saludo = new ReplaySubject();

    saludo.subscribe(
      (x) => {
        console.log(`Primera ${x}`);
      }
    );

    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
    .subscribe(
      (v) => {
        saludo.next(`${v}`);
      }
    );

    saludo.subscribe(
      (x) => {
        console.log(x);
      }
    );

  }

}
