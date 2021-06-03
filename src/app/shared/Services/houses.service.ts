import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) { }

  getCharacters(endPoint: string = ""){
    return this.http.get(`https://api.got.show/api/show/houses/${endPoint}`)
  }
}
