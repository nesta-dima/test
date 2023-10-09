import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from '../../../../models/index.model';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {
  @Input() index = 0;
  @Input() user!: ITeam;
  get isMobile() {
    return window.innerWidth < 1280;
  }
  getScreenWidth: any;
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }
}
