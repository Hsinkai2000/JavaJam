import {Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';



const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: '/menu',
      component: MenuComponent,
      title: 'Menu'
    }
  ];
  
  export default routeConfig;