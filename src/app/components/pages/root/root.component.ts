import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  index = 1;
  photos = ['1.png', '2.png', '3.png'];
  get getUrl() {
    return `./assets/images/${this.photos[this.index - 1]}`;
  }

  isMenuOpen = false;
  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });

    setInterval(() => {
      console.log('111', this.index);
      if (this.photos.length === this.index) {
        this.index = 1;
      } else {
        this.index = this.index + 1;
      }
    }, 1500);
  }
}
