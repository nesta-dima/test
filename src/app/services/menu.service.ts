import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuOpen$ = new BehaviorSubject(false);

  openMenu() {
    this.menuOpen$.next(!this.menuOpen$.value);
  }
  get isOpen(): boolean {
    return this.menuOpen$.value;
  }

  closeMenu() {
    this.menuOpen$.next(false);
  }
  constructor() {}
}
