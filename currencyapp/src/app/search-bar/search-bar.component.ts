import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  public currencies = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR"

  ];

  ngOnInit() {
    this.printCurrencies();
  }

  printCurrencies() {
    let datalistCurrencies = document.getElementById("currencies");
    let currenciesOptions = '';
    for (var i = 0; i < this.currencies.length; i++) {
      currenciesOptions += '<option value="' + this.currencies[i] + '"></option>';
    };

    datalistCurrencies.innerHTML = currenciesOptions;
  }
  validateInput($event) {
    $event.preventDefault();
    let inputField = (<HTMLInputElement>document.getElementById("searchBar")).value;
    console.log(inputField)
    if (inputField = "") {
      alert("Funkade ej");
      return false;
    }
  };

}
