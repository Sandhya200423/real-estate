import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-launches',
  standalone: true,
  templateUrl: './newlaunch.html',
  styleUrl: './newlaunch.css',
})
export class NewLaunches {
  projects = [
    {
      image: '/buy/hero.jpg',
      price: '₹95 Lakh',
      title: 'SkyDwell Residences',
      location: 'Pune',
      type: '3 & 4 BHK',
    },
    {
      image: '/buy/i5.jpg',
      price: '₹1.25 Cr',
      title: 'Royal Heights',
      location: 'Mumbai',
      type: '3 BHK',
    },
    {
      image: '/buy/i6.jpg',
      price: '₹82 Lakh',
      title: 'Green Valley',
      location: 'Kolhapur',
      type: '2 & 3 BHK',
    },
    {
      image: '/buy/m3.jpg',
      price: '₹1.45 Cr',
      title: 'The Grand Estate',
      location: 'Pune',
      type: '4 BHK',
    },
    {
      image: '/buy/p1.jpg',
      price: '₹78 Lakh',
      title: 'Urban Luxe',
      location: 'Mumbai',
      type: '2 BHK',
    },
    {
      image: '/buy/p2.jpg',
      price: '₹1.10 Cr',
      title: 'Skyline Gardens',
      location: 'Pune',
      type: '3 BHK',
    },
  ];
}
