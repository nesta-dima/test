import { Component } from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {data} from "../../../constants";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isMenuOpen = false;
  portfolioItems = []
  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  protected readonly data = data;
}
