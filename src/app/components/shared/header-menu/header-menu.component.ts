import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Router } from '@angular/router';
import { LocaleService } from '../../../services/locale.service';

type Language = 'en' | 'ru';
interface IRoute {
  path: string;
  locales: Record<Language, { value: string }>;
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
      locales: {
        ['en']: {
          value: 'about us',
        },
        ['ru']: {
          value: 'О нас',
        },
      },
    },
    {
      path: 'services',
      locales: {
        ['en']: {
          value: 'services',
        },
        ['ru']: {
          value: 'услуги',
        },
      },
    },
    {
      path: 'stages-of-work',
      locales: {
        ['en']: {
          value: 'stages of work',
        },
        ['ru']: {
          value: 'этапы работы',
        },
      },
    },
    {
      path: 'team',
      locales: {
        ['en']: {
          value: 'team',
        },
        ['ru']: {
          value: 'команда',
        },
      },
    },
    {
      path: 'portfolio',
      locales: {
        ['en']: {
          value: 'portfolio',
        },
        ['ru']: {
          value: 'портфолио',
        },
      },
    },
    {
      path: 'contacts',
      locales: {
        ['en']: {
          value: 'contacts',
        },
        ['ru']: {
          value: 'контакты',
        },
      },
    },
  ];

  isMenuOpen = false;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private localeService: LocaleService,
  ) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
    this.localeService.locale$.subscribe((locale) => {
      this.language = locale as Language;
    });
  }
  openMenu() {
    this.menuService.openMenu();
  }

  toRoute(route: string) {
    this.menuService.closeMenu();
    this.router.navigate([route]);
  }

  setLanguage(en: string) {
    this.localeService.setLanguage(en);
  }
}
