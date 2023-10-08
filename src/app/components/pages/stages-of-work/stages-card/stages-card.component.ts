import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IStages } from '../../../../models/index.model';

@Component({
  selector: 'app-stages-card',
  templateUrl: './stages-card.component.html',
  styleUrls: ['./stages-card.component.scss'],
})
export class StagesCardComponent implements OnInit {
  @Input() data: IStages = { title: '', image: '', description: '' };
  @ViewChild('card', { static: true }) card!: ElementRef;

  public getScreenWidth: any;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }
  onMouseEnter() {
    if (this.getScreenWidth < 1280) {
      return;
    }

    this.card.nativeElement.classList.add('active');
  }

  onMouseLeave() {
    if (this.getScreenWidth < 1280) {
      return;
    }
    this.card.nativeElement.classList.remove('active');
  }
}
