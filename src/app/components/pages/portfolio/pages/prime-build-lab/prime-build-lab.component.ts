import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from "../../../../../constants";
import {Item} from "../../../../../models/index.model";
import {MenuService} from "../../../../../services/menu.service";

interface IPortfolioItem {
  id: string;
  title: string[];
  services: string[];
  photos: string[];
}

@Component({
  selector: 'app-prime-build-lab',
  templateUrl: './prime-build-lab.component.html',
  styleUrls: ['./prime-build-lab.component.scss'],
})
export class PrimeBuildLabComponent {

  isMenuOpen = false;

  url = '';
  value: Item | null = null;
  constructor(private menuService: MenuService, private route: ActivatedRoute) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.url = params['url'];
      const test = data.find((item) => item.url === this.url);
      if (test) {
        this.value = test;
      }
    });
  }




}
