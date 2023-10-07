import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

interface IData {
  title: string;
  image: string;
  description: string[];
  capabilities: string[];
}
@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss'],
})
export class ServicesCardComponent implements OnInit {
  @Input() data: IData = {
    title: '',
    image: '',
    description: [],
    capabilities: [],
  };
  @ViewChild('description', { static: true }) description!: ElementRef;
  @ViewChild('image', { static: true }) image!: ElementRef;

  public getScreenWidth: any;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }

  onMouseEnter() {
    if (this.getScreenWidth > 1280) {
      this.image.nativeElement.style.opacity = '1';
      this.image.nativeElement.style.transform = ' translateX(0%)';
    }
  }

  onMouseLeave() {
    if (this.getScreenWidth > 1280) {
      this.image.nativeElement.style.opacity = '0';
      this.image.nativeElement.style.transform = 'translateX(-100%)';
    }
  }
}
