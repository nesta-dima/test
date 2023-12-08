import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  types = [
    'page.services.types.brandingLogoDesign',
    'page.services.types.photoVideoProduction',
    'page.services.types.webDesign&Development',
    'page.services.types.seoOptimization',
    'page.services.types.socialMediaManagement',
  ];

  items = [
    {
      title: 'page.services.cards.card1.title',
      image: 'assets/images/services/1.png',
      description: [
        'page.services.cards.card1.description.p1',
        'page.services.cards.card1.description.p2',
        'page.services.cards.card1.description.p3',
        'page.services.cards.card1.description.p4',
        'page.services.cards.card1.description.p5',
      ],
      capabilities: [
        'page.services.cards.card1.capabilities.p1',
        'page.services.cards.card1.capabilities.p2',
        'page.services.cards.card1.capabilities.p3',
        'page.services.cards.card1.capabilities.p4',
        'page.services.cards.card1.capabilities.p5',
        'page.services.cards.card1.capabilities.p6',
        'page.services.cards.card1.capabilities.p7',
        'page.services.cards.card1.capabilities.p8',
        'page.services.cards.card1.capabilities.p9',
        'page.services.cards.card1.capabilities.p10',
      ],
    },
    {
      title: 'page.services.cards.card2.title',
      image: 'assets/images/services/2.png',
      description: ['page.services.cards.card2.description.p1'],
      capabilities: [
        'page.services.cards.card2.capabilities.p1',
        'page.services.cards.card2.capabilities.p2',
        'page.services.cards.card2.capabilities.p3',
        'page.services.cards.card2.capabilities.p4',
        'page.services.cards.card2.capabilities.p5',
        'page.services.cards.card2.capabilities.p6',
        'page.services.cards.card2.capabilities.p7',
        'page.services.cards.card2.capabilities.p8',
        'page.services.cards.card2.capabilities.p9',
        'page.services.cards.card2.capabilities.p10',
      ],
    },
    {
      title: 'page.services.cards.card3.title',
      image: 'assets/images/services/3.png',
      description: [
        'page.services.cards.card3.description.p1',
        'page.services.cards.card3.description.p2',
      ],
      capabilities: [],
    },
    {
      title: 'page.services.cards.card4.title',
      image: 'assets/images/services/4.png',
      description: [
        'page.services.cards.card4.description.p1',
        'page.services.cards.card4.description.p2',
        'page.services.cards.card4.description.p3',
        'page.services.cards.card4.description.p4',
      ],
      capabilities: [],
    },
    {
      title: 'page.services.cards.card5.title',
      image: 'assets/images/services/5.png',
      description: [
        'page.services.cards.card5.description.p1',
        'page.services.cards.card5.description.p2',
        'page.services.cards.card5.description.p3',
        'page.services.cards.card5.description.p4',
      ],
      capabilities: [],
    },
  ];

  works = [];

  isMenuOpen = false;
  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }
}
