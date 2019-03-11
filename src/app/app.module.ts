import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';

import { FilterNamePipe, FilterTypePipe, FilterIdPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    FilterTypePipe,
    FilterIdPipe,
    FilterNamePipe
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
