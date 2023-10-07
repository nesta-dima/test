import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

type Language = 'en' | 'ru';
interface IRoute {
  path: string;
  text: string;
}
interface Routes {
  language: Language;
  routes: IRoute[];
}

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  language: Language = 'en';
  routes: IRoute[] = [
    {
      path: 'about-us',
      text: 'menu.aboutUs',
    },
    {
      path: 'services',
      text: 'menu.services',
    },
    {
      path: 'stages-of-work',
      text: 'menu.stagesOfWork',
    },
    {
      path: 'team',
      text: 'menu.team',
    },
    {
      path: 'portfolio',
      text: 'menu.portfolio',
    },
    {
      path: 'contacts',
      text: 'menu.contacts',
    },
  ];

  isMenuOpen = false;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private translate: TranslateService,
  ) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });

    this.translate.onLangChange.subscribe((event) => {
      this.language = event.lang as Language;
    });
  }
  openMenu() {
    this.menuService.openMenu();
  }

  toRoute(route: string) {
    this.menuService.closeMenu();
    this.router.navigate([route]);
  }

  setLanguage(language: string) {
    this.translate.use(language);
    this.menuService.closeMenu();
  }
}
