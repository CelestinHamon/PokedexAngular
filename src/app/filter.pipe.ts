import { Pipe } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'filterName'
})
export class FilterNamePipe {
  transform(pokemon: any, nomRecherche: string) {
    if (nomRecherche === '') {
      return pokemon;
    } else {
      return pokemon.filter(p =>
        nomRecherche
          ? p.name.toLowerCase().includes(nomRecherche.toLowerCase())
          : pokemon
      );
    }
  }
}

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'filterId'
})
export class FilterIdPipe {
  transform(pokemon: any, idRecherche: number) {
    if (idRecherche === null) {
      return pokemon;
    } else if (idRecherche === 0) {
      return pokemon;
    } else {
      return pokemon.filter(p => p.id === idRecherche);
    }
  }
}

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'filterType'
})
export class FilterTypePipe {
  transform(pokemon: any, typeRecherche: string) {
    if (typeRecherche === '') {
      return pokemon;
    } else {
      return pokemon.filter(p => p.type.indexOf(typeRecherche) > -1);
    }
  }
}
