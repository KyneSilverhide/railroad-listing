import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Language} from '../models/lang.model';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() {
  }

  private language: Language = 'fr';
  private languageSubject = new BehaviorSubject<Language>(this.language);

  public onLanguageChanged = this.languageSubject.asObservable();

  setLanguage(language: Language): void {
    this.languageSubject.next(language);
  }

  getCurrentLanguage(): Language {
    return this.language;
  }
}
