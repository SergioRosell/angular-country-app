import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-caital-page',
  templateUrl: './by-caital-page.component.html',
  styles: [
  ]
})
export class ByCaitalPageComponent {

  public countries: Country[]= [];

  constructor(private countriesService: CountriesService){}
  public isLoading: boolean= false;

  searchByCapital(term: string):void{

    this.isLoading= true;

    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries= countries;
      this.isLoading= false;
    } );

  }

}
