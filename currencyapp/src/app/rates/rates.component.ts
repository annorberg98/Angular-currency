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

  async showRatesFromLocal() {
    let storageRates = this.getStorage();
    console.log(storageRates);
    let symbolsList: [] = storageRates.currencies;

    console.log(symbolsList);

    this.rates = await this.currency.getSymbols(symbolsList).toPromise();
  }

  inLocal(key) {
    let storage = this.getStorage();
    for (let i = 0; i <= storage.currencies.length; i++) {
      if (storage.currencies[i] == key) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.generateFromStorage();
    console.log(this.rates);
  }

  storageExists() {
    let storage = this.getStorage();
    if (storage === null || storage === { "currencies": [] }) {
      return false;
    } else {
      return true;
    }
  }

  generateFromStorage() {
    let storage = this.getStorage();
    if (!this.storageExists()) {
      this.showRates();
    } else {
      this.showRatesFromLocal();
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

  switchChange($event) {
    if ($event) {
      this.showRatesFromLocal();
      console.log("Local")
    } else {
      this.showRates();
      console.log("Get from API");
    }
  }

  switchCheckControl() {
    if (this.storageExists()) {
      return true;
    } else {
      return false;
    }
  }

}
