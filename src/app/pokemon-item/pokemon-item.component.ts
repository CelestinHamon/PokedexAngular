import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pId: number;
  @Input() pName: string;
  @Input() pTypes: string[];
  @Input() pImage: string[];

  constructor() {}

  ngOnInit() {}
}
