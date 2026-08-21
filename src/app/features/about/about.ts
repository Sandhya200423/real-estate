import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  companyImages = {
    small: '/about/a2.jpg',
    large: '/about/a3.jpg'
  };

  missionImage = '/about/a5.jpg';

  stats = [
    {
      icon: 'fa-solid fa-users',
      number: '15K+',
      label: 'Happy Customers'
    },
    {
      icon: 'fa-solid fa-building',
      number: '3,500+',
      label: 'Properties Listed'
    },
    {
      icon: 'fa-solid fa-city',
      number: '50+',
      label: 'Cities Covered'
    },
    {
      icon: 'fa-solid fa-headset',
      number: '24/7',
      label: 'Customer Support'
    }
  ];

  missionDetails = [
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Our Mission',
      description:
        'Deliver reliable real estate solutions with complete transparency.'
    },
    {
      icon: 'fa-solid fa-eye',
      title: 'Our Vision',
      description:
        "Become India's most trusted property platform."
    }
  ];

  chooseCards = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Verified Properties',
      description:
        'Every property is carefully verified to ensure safe and reliable transactions.'
    },
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Expert Guidance',
      description:
        'Our professionals help you make confident property decisions.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Transparent Process',
      description:
        'Clear documentation and honest communication at every step.'
    },
    {
      icon: 'fa-solid fa-headset',
      title: '24/7 Support',
      description:
        'Dedicated support whenever you need assistance.'
    }
  ];

  learnMore() {
    console.log('Learn More clicked');
  }

}