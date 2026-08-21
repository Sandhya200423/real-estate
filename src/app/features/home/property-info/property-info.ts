import { Component } from '@angular/core';

@Component({
  selector: 'app-property-info',
  imports: [],
  templateUrl: './property-info.html',
  styleUrl: './property-info.css'
})
export class PropertyInfo {

  features = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Verified Properties',
      description:
        'All properties are thoroughly verified for your peace of mind.'
    },
    {
      icon: 'fa-regular fa-user',
      title: 'Expert Agents',
      description:
        'Connect with experienced agents for the best guidance.'
    },
    {
      icon: 'fa-regular fa-handshake',
      title: 'Best Deals',
      description:
        'Get the best deals and prices in the real estate market.'
    },
    {
      icon: 'fa-solid fa-headset',
      title: '24/7 Support',
      description:
        'Our support team is always here to help you.'
    }
  ];

}