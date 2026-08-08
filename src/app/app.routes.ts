import { Routes } from '@angular/router';

import { Home } from './features/homen/home';
import { PropertiesComponent } from './features/properties/properties';
import { Sell } from './features/sell/sell';
import { About } from './features/about/about';
import { Agent } from './features/agent/agent';
import { Buy } from './features/buy/buy';
import { Blog } from './features/blog/blog';
import { Contactus } from './features/contactus/contactus';





export const routes: Routes = [
  {
    path: '',
    component: Home
  },
 
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'buy',
    component: Buy
  },


  {
    path: 'sell',
    component: Sell
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'agents',
    component: Agent
  },
  {
    path: 'blog',
    component: Blog
  },
  {
    path: 'contactus',
    component: Contactus
  },
  {
    path: '**',
    redirectTo: ''
  }
];