import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url: string = "https://api.exchangeratesapi.io/latest";
  private base: string = "SEK";

  public rawJson = {
    "base": "SEK",
    "rates": {
      "BGN": 0.182150075,
      "NZD": 0.1597701471,
      "ILS": 0.3750011642,
      "RUB": 6.7104858763,
      "CAD": 0.1396999246,
      "USD": 0.103741164,
      "PHP": 5.4481107914,
      "CHF": 0.1045327969,
      "AUD": 0.1508666052,
      "JPY": 11.4144151695,
      "TRY": 0.6361748298,
      "HKD": 0.8142084137,
      "MYR": 0.435193205,
      "HRK": 0.6916543265,
      "CZK": 2.4047945014,
      "IDR": 1502.224022799,
      "DKK": 0.6955566111,
      "NOK": 0.9084499828,
      "HUF": 30.4499268904,
      "GBP": 0.0820504224,
      "MXN": 1.9733359411,
      "THB": 3.3191770743,
      "ISK": 12.8896463729,
      "ZAR": 1.4988404906,
      "BRL": 0.4208413661,
      "SGD": 0.1433414359,
      "PLN": 0.4010691701,
      "INR": 7.2564797482,
      "KRW": 123.6260512419,
      "RON": 0.4433703072,
      "CNY": 0.7176664525,
      "SEK": 1.0,
      "EUR": 0.093133283
    },
    "date": "2019-05-23"
  }

  getRates() {
    const params = new HttpParams().set('base', this.base);
    return this.http.get(this.url, { params });
  }

  getSymbols(symbols) {
    const params = new HttpParams().set('base', this.base).set('symbols', symbols.join(','));

    return this.http.get(this.url, { params });
  }


  constructor(private http: HttpClient) { }
}
