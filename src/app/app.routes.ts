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
    path: 'search',
    loadComponent: () => import('./features/search/search').then((m) => m.Search),
  },
  {
    path: 'property/:id',
    loadComponent: () =>
      import('./features/property-details/property-details').then((m) => m.PropertyDetails),
  },
  {
    path: 'schedule-visit/:id',
    loadComponent: () =>
      import('./features/shedule-visit/shedule-visit').then((m) => m.ScheduleVisit),
  },
  {
    path: 'buy',
    loadComponent: () => import('./features/buy/buy').then((m) => m.Buy),
  },
  {
    path: 'buy/find-your-home',
    loadComponent: () => import('./features/buy/find-home/find-home').then((m) => m.FindYourHome),
  },

  {
    path: 'buy/new-launches',
    loadComponent: () => import('./features/buy/newlaunch/newlaunch').then((m) => m.NewLaunches),
  },

  {
    path: 'buy/home-loan-emi',
    loadComponent: () => import('./features/buy/emi/emi').then((m) => m.HomeLoanEmi),
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
