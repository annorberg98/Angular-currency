import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  public currencies = [
    "AUD: Australian Dollar",
    "BGN: Bulgarian Lev",
    "BRL: Brazilian Real",
    "CAD: Canadian Dollar",
    "CHF: Swiss Franc",
    " CNY: Chinese Renmibi",
    "CZK: Czech Koruna",
    "DKK: Danish Krone",
    "EUR: Euro",
    "GBP: Pound Sterling",
    "HKD: Hong Kong Dollar",
    "HRK: Croatian Kuna",
    "HUF: Hungarian Forint",
    "IDR: Indonesian Rupiah",
    "ILS: Israeli New Shekel",
    "INR: Indian Rupee",
    "ISK: Icelandic Króna",
    "JPY: Japanese Yen",
    "KRW: South Korean Won",
    "MXN: Mexican Peso",
    "MYR: Malaysian Ringgit",
    "NOK: Norwegian Krone",
    "NZD: New Zealand Dollar",
    "PHP: Philippine Peso",
    "PLN: Polish Złoty",
    "RON: Romanian Leu",
    "RUB: Russian Ruble",
    "SEK: Swedish krona",
    "SGD: Singapore Dollar",
    "THB: Thai Baht",
    "TRY: Turkish Lira",
    "USD: United States Dollar",
    "ZAR: South African Rand"
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
