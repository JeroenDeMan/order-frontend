import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Item} from '../item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl ="http://localhost:9000/items"

  constructor(private http:HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  searchItem(term:String):Observable<Item[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Item[]>(`${this.itemUrl}/?name=]${term}`)
  }
}
