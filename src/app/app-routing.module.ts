import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/pages/root/root.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { StagesOfWorkComponent } from './components/pages/stages-of-work/stages-of-work.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { OrderComponent } from './components/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'stages-of-work',
    component: StagesOfWorkComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
