import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() searchName = '';
  @Input() searchId = null;
  @Input() searchType = '';

  types = [
    'Grass',
    'Poison',
    'Fire',
    'Flying',
    'Water',
    'Bug',
    'Normal',
    'Fighting',
    'Rock',
    'Steel',
    'Ice',
    'Ghost',
    'Dragon',
    'Psychic',
    'Ground',
    'Electric'
  ];

  constructor(private httpService: HttpClient) {}
  arrPokemon: string[];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.httpService.get('../assets/listPokemon.json').subscribe(
      data => {
        this.arrPokemon = data as string[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
