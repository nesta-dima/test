import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  icons = [
    {
      iconName: 'custom-logo',
      url: '/assets/icons/logo.svg',
    },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) {
    this.icons.forEach(({ iconName, url }) => {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitzer.bypassSecurityTrustResourceUrl(url),
      );
    });
  }
}
