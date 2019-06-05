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
    this.rates = await this.currency.getRates().toPromise();
  }

  async showRatesFromLocal() {
    if (this.storageExists()) {
      let storageRates = this.getStorage();
      let symbolsList: [] = storageRates.currencies;

      this.rates = await this.currency.getSymbols(symbolsList).toPromise();
      console.log(this.rates);
    } else {
      this.rates = {
        "base": "SEK",
        "rates": {},
        "date": "-"
      }
    }

  }

  inLocal(key) {
    let storage = this.getStorage();
    if (storage == null) {
      return false;
    }
    for (let i = 0; i <= storage.currencies.length; i++) {
      if (storage.currencies[i] == key) {
        return true;
      }
    }
    return false;
  }


  ngOnInit() {
    this.generateFromStorage();
  }

  storageExists() {
    let storage = localStorage.getItem('currencies')

    if (storage == null || storage == '{"currencies":[]}') {
      return false;
    } else {
      return true;
    }
  }

  generateFromStorage() {
    let storage = this.getStorage();
    if (this.storageExists()) {
      this.showRatesFromLocal();
    } else {
      this.showRates();
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

  deleteFromLocalstorage(currency) {
    if (this.inLocal(currency)) {
      let stg = this.getStorage();
      for (var i = 0; i <= stg.currencies.length; i++) {
        if (stg.currencies[i] == currency) {
          stg.currencies.splice(i, 1);
        }
      }
      localStorage.clear();
      localStorage.setItem('currencies', JSON.stringify(stg));
    }
  }

}
