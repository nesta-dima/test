import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { ITeam } from '../../../models/index.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements AfterViewInit {
  isMenuOpen = false;
  team: ITeam[] = [
    {
      name: 'page.team.cards.card1.name',
      position: 'page.team.cards.card1.position',
      image: '/assets/images/team.maria.png',
      description: 'page.team.cards.card1.description',
      interests: 'page.team.cards.card1.interests',
      quotes: [
        'page.team.cards.card1.quotes.quote1',
        'page.team.cards.card1.quotes.quote2',
        'page.team.cards.card1.quotes.quote3',
      ],
    },
    {
      name: 'page.team.cards.card2.name',
      position: 'page.team.cards.card2.position',
      image: '/assets/images/team.anna.png',
      description: 'page.team.cards.card2.description',
      interests: 'page.team.cards.card2.interests',
      quotes: ['page.team.cards.card2.quotes.quote1'],
    },
  ];

  @ViewChild('videoElement') videoElement!: ElementRef;
  private isPlaying = true;

  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }
  videoVolume = 0.01;
  ngAfterViewInit() {
    this.videoElement.nativeElement.addEventListener('loadedmetadata', () => {
      this.videoElement.nativeElement.volume = this.videoVolume;
    });
  }
}
