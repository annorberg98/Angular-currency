import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  public currencies = [
    "SEK",
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
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR"

  ];

  public rates;
  public convertFrom;
  public currencyTo;

  constructor(private currency: CurrencyService) { }

  async getRates() {
    this.rates = this.currency.rawJson;
    // this.rates = await this.currency.getRates().toPromise();
  }

  calculator() {
    return this.convertFrom * this.rates.rates[this.currencyTo];
  }



  ngOnInit() {
    this.getRates();
    //this.printCurrencies(this.currencies);

  }

}
