import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },

  {
    path: 'properties',
    loadComponent: () => import('./features/properties/properties').then((m) => m.Properties),
  },

  {
    path: 'buy',
    loadComponent: () => import('./features/buy/buy').then((m) => m.Buy),
  },

  {
    path: 'sell',
    loadComponent: () => import('./features/sell/sell').then((m) => m.Sell),
  },

  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },

  {
    path: 'agents',
    loadComponent: () => import('./features/agent/agent').then((m) => m.Agent),
  },

  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
  },

  {
    path: 'contactus',
    loadComponent: () => import('./features/contactus/contactus').then((m) => m.Contactus),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
