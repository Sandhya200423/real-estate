import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buy',
  imports: [NgFor, RouterLink],
  templateUrl: './buy.html',
  styleUrl: './buy.css'
})
export class Buy {

  image = '/buy/f3.jpg';

  features = [
    {
      icon: 'fa-solid fa-building',
      title: 'Premium Properties',
      description:
        'Apartments, villas and premium homes designed for every lifestyle.'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Verified Listings',
      description:
        'Genuine properties with transparent details and trusted information.'
    },
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Expert Assistance',
      description:
        'Professional support from search to ownership.'
    }
  ];

}