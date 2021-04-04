import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { skipUntil, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-skip-until-share-replay',
  templateUrl: './skip-until-share-replay.component.html',
  styleUrls: ['./skip-until-share-replay.component.css']
})
export class SkipUntilShareReplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const interval$ = interval(1000);
    const click$ = fromEvent(document, 'click');

    // const emitAfterClick = interval$.pipe(
    //   skipUntil(click$)
    // );

    // emitAfterClick.subscribe(console.log);

    const emitAndShare = interval$.pipe(shareReplay());

    emitAndShare.subscribe(v => console.log(`ShareReplay ${v}`));

    click$.subscribe(() => {
      emitAndShare.subscribe(v => console.log(`ShareReplay2 ${v}`));
    });

  }

}
