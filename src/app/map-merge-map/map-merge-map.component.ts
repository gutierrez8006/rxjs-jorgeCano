import { Component, OnInit } from '@angular/core';
import { fromEvent} from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-map-merge-map',
  templateUrl: './map-merge-map.component.html',
  styleUrls: ['./map-merge-map.component.css']
})
export class MapMergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const API_URL = 'https://rickandmortyapi.com/api/character/';

    const click$ = fromEvent(document, 'click');

    click$.pipe(
      map((data) => {
        if (data.isTrusted){
          return 10;
        }
      }),
      mergeMap((id) => {
        return ajax(`${API_URL}${id}`);
      })
      ,
      map((data: any) => {
        return `Personaje: ${data.response.name}`;
      })
    ).subscribe(console.log);
  }

}
