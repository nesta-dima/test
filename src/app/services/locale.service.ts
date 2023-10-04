import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  locale$ = new BehaviorSubject('en');
  constructor() {}

  setLanguage(en: string) {
    this.locale$.next(en);
  }
}
