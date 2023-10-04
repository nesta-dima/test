import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/pages/root/root.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ServicesComponent } from './components/pages/services/services.component';

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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
