import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property, PropertyService } from '../../shared/service/property.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.html',
  styleUrl: './properties.css',
})
export class Properties implements OnInit {
  properties: Property[] = [];

  stats = [
    {
      icon: 'fa-solid fa-house',
      value: '250+',
      title: 'Premium Properties',
    },
    {
      icon: 'fa-solid fa-building',
      value: '15+',
      title: 'Cities Covered',
    },
    {
      icon: 'fa-solid fa-user-tie',
      value: '100+',
      title: 'Verified Agents',
    },
    {
      icon: 'fa-solid fa-heart',
      value: '12K+',
      title: 'Happy Clients',
    },
  ];

  categories = [
    {
      icon: 'fa-solid fa-house',
      name: 'Villa',
      properties: '120',
    },
    {
      icon: 'fa-solid fa-building',
      name: 'Apartment',
      properties: '300',
    },
    {
      icon: 'fa-solid fa-city',
      name: 'Penthouse',
      properties: '85',
    },
    {
      icon: 'fa-solid fa-building-columns',
      name: 'Commercial',
      properties: '150',
    },
    {
      icon: 'fa-solid fa-house-chimney',
      name: 'Farmhouse',
      properties: '45',
    },
    {
      icon: 'fa-solid fa-map',
      name: 'Land',
      properties: '60',
    },
  ];

  showcaseProperties = [
    {
      id: 1,
      title: 'Luxury Villa in Lonavala',
      location: 'Lonavala, Pune',
      price: '₹ 3.45 Cr',
      beds: '4 Beds',
      baths: '4 Baths',
      area: '4100 Sq.Ft.',
      image: '/properties/i4.jpg',
    },
    {
      id: 2,
      title: 'Skyline Penthouse Mumbai',
      location: 'Bandra West, Mumbai',
      price: '₹ 9.80 Cr',
      beds: '4 Beds',
      baths: '5 Baths',
      area: '6200 Sq.Ft.',
      image: '/properties/i2.jpg',
    },
    {
      id: 3,
      title: 'Modern Apartment Baner',
      location: 'Baner, Pune',
      price: '₹ 1.75 Cr',
      beds: '3 Beds',
      baths: '3 Baths',
      area: '1850 Sq.Ft.',
      image: '/properties/i3.jpg',
    },
  ];

  premiumProperties = [
    {
      id: 4,
      title: 'Elegant Villa in Kharadi',
      price: '₹ 2.95 Cr',
      location: 'Kharadi, Pune',
      badge: 'HOT DEAL',
      beds: '4 Beds',
      baths: '4 Baths',
      area: '3800 Sq.Ft',
      image: '/properties/i5.jpg',
    },
    {
      id: 5,
      title: 'Premium Villa in Goa',
      price: '₹ 4.20 Cr',
      location: 'Goa',
      badge: 'NEW',
      beds: '5 Beds',
      baths: '5 Baths',
      area: '5000 Sq.Ft',
      image: '/properties/i6.jpg',
    },
    {
      id: 6,
      title: 'Luxury Apartment in Worli',
      price: '₹ 6.70 Cr',
      location: 'Worli, Mumbai',
      badge: 'FEATURED',
      beds: '4 Beds',
      baths: '4 Baths',
      area: '3450 Sq.Ft',
      image: '/properties/p1.jpg',
    },
    {
      id: 7,
      title: 'Beachfront Villa Goa',
      price: '₹ 8.90 Cr',
      location: 'North Goa',
      badge: 'EXCLUSIVE',
      beds: '5 Beds',
      baths: '6 Baths',
      area: '6300 Sq.Ft',
      image: '/properties/p2.jpg',
    },
    {
      id: 8,
      title: 'Premium Apartment',
      price: '₹ 3.85 Cr',
      location: 'Baner, Pune',
      badge: 'NEW LAUNCH',
      beds: '3 Beds',
      baths: '3 Baths',
      area: '2500 Sq.Ft',
      image: '/properties/m3.jpg',
    },
  ];

  constructor(
    private router: Router,
    private propertyService: PropertyService,
  ) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe({
      next: (data) => {
        this.properties = data;
      },

      error: (error) => {
        console.error('Error loading properties:', error);
      },
    });
  }

  scheduleVisit(property: any): void {
    this.router.navigate(['/schedule-visit', property.id], {
      state: {
        property: property,
      },
    });
  }

  viewAllProperties(): void {}
}
