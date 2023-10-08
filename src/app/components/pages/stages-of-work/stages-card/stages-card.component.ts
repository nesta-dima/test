import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IStages } from '../../../../models/index.model';

@Component({
  selector: 'app-stages-card',
  templateUrl: './stages-card.component.html',
  styleUrls: ['./stages-card.component.scss'],
})
export class StagesCardComponent {
  @Input() data: IStages = { title: '', image: '', description: '' };
  @ViewChild('card', { static: true }) card!: ElementRef;

  onMouseEnter() {
    this.card.nativeElement.classList.add('active');
  }

  onMouseLeave() {
    this.card.nativeElement.classList.remove('active');
  }
}
