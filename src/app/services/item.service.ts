import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Item} from '../model/item';
import {CreateItem} from '../model/create-item';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl ="http://localhost:9000/items";
  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json"})}

  constructor(private http:HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  createItem(item:CreateItem):Observable<any>{
    console.log(item);
    return this.http.post<any>(this.itemUrl, item, this.httpOptions);
  }

  getItemById(id:string):Observable<Item>{
    const urlForId = `${this.itemUrl}/${id}`;
    return this.http.get<Item>(urlForId);
  }
}
