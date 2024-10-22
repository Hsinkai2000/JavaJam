import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { JobsComponent } from './jobs/jobs.component';
import { MusicComponent } from './music/music.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu',
  },
  {
    path: 'jobs',
    component: JobsComponent,
    title: 'Jobs',
  },
  {
    path: 'music',
    component: MusicComponent,
    title: 'Music',
  },
  {
    path: 'report',
    component: ReportComponent,
    title: 'Daily Report',
  },
];
