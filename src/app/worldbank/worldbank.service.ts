import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WorldbankService {

  constructor(private http_: HttpClient) {
  }
  public get() {
    return this.http_.get('http://localhost:3000/countries');
  }
}
