import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgOptimizedImage } from '@angular/common';
import { RootComponent } from './components/pages/root/root.component';
import { HeaderMenuComponent } from './components/shared/header-menu/header-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ServicesCardComponent } from './components/shared/services-card/services-card.component';
import { ServicesWorkComponent } from './components/shared/services-work/services-work.component';
import { StagesOfWorkComponent } from './components/pages/stages-of-work/stages-of-work.component';
import { StagesCardComponent } from './components/pages/stages-of-work/stages-card/stages-card.component';
import { WriteTextLetterDirective } from './directives/write-text-letter.directive';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamCardComponent } from './components/pages/team/team-card/team-card.component';
import { TeamQuoteComponent } from './components/pages/team/team-quote/team-quote.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RootComponent,
    HeaderMenuComponent,
    FooterComponent,
    AboutUsComponent,
    ServicesComponent,
    ServicesCardComponent,
    ServicesWorkComponent,
    StagesOfWorkComponent,
    StagesCardComponent,
    WriteTextLetterDirective,
    TeamComponent,
    TeamCardComponent,
    TeamQuoteComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
