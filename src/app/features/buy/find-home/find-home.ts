import { Component } from '@angular/core';

@Component({
  selector: 'app-find-your-home',
  standalone: true,
  imports: [],
  templateUrl: './find-home.html',
  styleUrl: './find-home.css',
})
export class FindYourHome {
  properties = [
    {
      image: '/buy/2.jpg',
      title: 'Luxury Villa',
      location: 'Pune',
      bhk: '4 BHK',
      area: '2400 Sq.Ft',
      price: '₹1.25 Cr',
    },
    {
      image: '/buy/3.jpg',
      title: 'Premium Apartment',
      location: 'Mumbai',
      bhk: '3 BHK',
      area: '1450 Sq.Ft',
      price: '₹85 Lakh',
    },
    {
      image: '/buy/s9.jpg',
      title: 'Modern Penthouse',
      location: 'Kolhapur',
      bhk: '3 BHK',
      area: '1800 Sq.Ft',
      price: '₹72 Lakh',
    },
    {
      image: '/buy/5.jpg',
      title: 'Elegant Villa',
      location: 'Pune',
      bhk: '3 BHK',
      area: '2100 Sq.Ft',
      price: '₹98 Lakh',
    },
    {
      image: '/buy/6.jpg',
      title: 'City Apartment',
      location: 'Mumbai',
      bhk: '2 BHK',
      area: '1100 Sq.Ft',
      price: '₹62 Lakh',
    },
    {
      image: '/buy/7.jpg',
      title: 'Garden Villa',
      location: 'Kolhapur',
      bhk: '4 BHK',
      area: '2600 Sq.Ft',
      price: '₹1.10 Cr',
    },
    {
      image: '/buy/s10.jpg',
      title: 'Luxury Apartment',
      location: 'Pune',
      bhk: '2 BHK',
      area: '1250 Sq.Ft',
      price: '₹58 Lakh',
    },
    {
      image: '/buy/9.jpg',
      title: 'Royal Penthouse',
      location: 'Mumbai',
      bhk: '4 BHK',
      area: '2200 Sq.Ft',
      price: '₹1.45 Cr',
    },
  ];
}
