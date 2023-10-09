import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-quote',
  templateUrl: './team-quote.component.html',
  styleUrls: ['./team-quote.component.scss'],
})
export class TeamQuoteComponent {
  @Input() quotes: string[] = [];
  @Input() name = '';
}
