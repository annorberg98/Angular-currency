import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-currencyConverter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

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
    this.printCurrencyOptions();
  }

  printCurrencyOptions() {
    let currencyFields = document.getElementsByClassName("currencyValue");
    console.log(currencyFields);
    for (var i = 0; i < currencyFields.length; i++) {
      let currenciesOptions = '<option selected value="0">Chose a currency</option>';
      for (var i = 0; i < this.currencies.length; i++) {
        console.log(this.currencies[i]);
        currenciesOptions += '<option value="' + this.currencies[i] + '">' + this.currencies[i] + '</option>';
      }
      currencyFields.innerHTML = currenciesOptions;
      console.log(currencyFields);

    };

  }
}
