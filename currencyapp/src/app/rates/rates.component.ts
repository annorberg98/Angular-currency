import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  constructor(private currency: CurrencyService) {

  }

  public rates;
  public objectKeys = Object.keys;

  async showRates() {
    this.rates = this.currency.rawJson;
    //this.rates = await this.currency.getRates().toPromise();
  }

  ngOnInit() {
    this.generateFromStorage();
    console.log(this.rates);
  }

  generateFromStorage() {
    let storage = this.getStorage();
    if (storage === null || storage === { "currencies": [] }) {
      this.showRates();
    } else {
      this.showRates();
      console.log("Fattas personliga just nu");
    }
  }

  getStorage() {
    let storage = localStorage.getItem('currencies');
    return JSON.parse(storage);
  }

  addToStorage(key: string) {
    let currencyStorage = this.getStorage();


    let storage = { "currencies": [] }
    let newItem = key;

    if (currencyStorage != null) {
      currencyStorage.currencies.push(newItem);

      currencyStorage = JSON.stringify(currencyStorage);
      localStorage.setItem('currencies', currencyStorage);
    } else {
      storage.currencies.push(newItem)
      let newStorage = JSON.stringify(storage);
      localStorage.setItem('currencies', newStorage);
    }

  }

}
