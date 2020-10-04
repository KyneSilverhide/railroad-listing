import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Language} from '../models/lang.model';
import {Item, Section} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  public getSections(lang: Language): Observable<Section[]> {
    return this.http.get<Section[]>(`assets/data/sections.${lang}.json`);
  }

  public getItems(section: string, lang: Language): Observable<Item[]> {
    return this.http.get<Item[]>(`assets/data/items-${section}.${lang}.json`);
  }
}
