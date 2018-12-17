import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private _productsUrl = 'http://localhost:3000/api/products';
  private _shelfsUrl = 'http://localhost:3000/api/shelfs';

  constructor( private http: HttpClient ) { }

  getProducts() {
    return this.http.get<any> (this._productsUrl);
  }
  getShelfs() {
    return this.http.get<any> (this._shelfsUrl);
  }
}
