import { Component } from '@angular/core';
import { IStages } from '../../../models/index.model';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-stages-of-work',
  templateUrl: './stages-of-work.component.html',
  styleUrls: ['./stages-of-work.component.scss'],
})
export class StagesOfWorkComponent {
  isMenuOpen = false;
  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  stages: IStages[] = [
    {
      title: 'page.stages.card1.title',
      image: 'assets/images/stages.card1.png',
      description: 'page.stages.card1.description',
    },
    {
      title: 'page.stages.card2.title',
      image: 'assets/images/stages.card2.png',
      description: 'page.stages.card2.description',
    },
    {
      title: 'page.stages.card3.title',
      image: 'assets/images/stages.card3.png',
      description: 'page.stages.card3.description',
    },
  ];
}
