import { Component } from '@angular/core';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [],
  templateUrl: './properties.html',
  styleUrl: './properties.css'
})
export class Properties {

  searchItems = [
    {
      label: 'Location',
      options: ['Select Location', 'Pune', 'Mumbai', 'Goa']
    },
    {
      label: 'Property Type',
      options: ['All Types', 'Villa', 'Apartment', 'Penthouse']
    },
    {
      label: 'Price Range',
      options: ['Any Price', '₹1Cr+', '₹3Cr+']
    },
    {
      label: 'BHK',
      options: ['Any', '2 BHK', '3 BHK', '4 BHK']
    }
  ];

  popularSearches = [
    'Pune',
    'Mumbai',
    'Goa',
    'Bangalore',
    'Delhi'
  ];

  stats = [
    {
      icon: 'fa-solid fa-house',
      value: '250+',
      title: 'Premium Properties'
    },
    {
      icon: 'fa-solid fa-building',
      value: '15+',
      title: 'Cities Covered'
    },
    {
      icon: 'fa-solid fa-user-tie',
      value: '100+',
      title: 'Verified Agents'
    },
    {
      icon: 'fa-solid fa-heart',
      value: '12K+',
      title: 'Happy Clients'
    }
  ];

  categories = [
    {
      icon: 'fa-solid fa-house',
      name: 'Villa',
      properties: '120'
    },
    {
      icon: 'fa-solid fa-building',
      name: 'Apartment',
      properties: '300'
    },
    {
      icon: 'fa-solid fa-city',
      name: 'Penthouse',
      properties: '85'
    },
    {
      icon: 'fa-solid fa-building-columns',
      name: 'Commercial',
      properties: '150'
    },
    {
      icon: 'fa-solid fa-house-chimney',
      name: 'Farmhouse',
      properties: '45'
    },
    {
      icon: 'fa-solid fa-map',
      name: 'Land',
      properties: '60'
    }
  ];

  showcaseProperties = [
    {
      title: 'Luxury Villa in Lonavala',
      location: 'Lonavala, Pune',
      price: '₹ 3.45 Cr',
      beds: '4 Beds',
      baths: '4 Baths',
      area: '4100 Sq.Ft.',
      image: '/properties/i4.jpg'
    },
    {
      title: 'Skyline Penthouse Mumbai',
      location: 'Bandra West, Mumbai',
      price: '₹ 9.80 Cr',
      beds: '4 Beds',
      baths: '5 Baths',
      area: '6200 Sq.Ft.',
      image: '/properties/i2.jpg'
    },
    {
      title: 'Modern Apartment Baner',
      location: 'Baner, Pune',
      price: '₹ 1.75 Cr',
      beds: '3 Beds',
      baths: '3 Baths',
      area: '1850 Sq.Ft.',
      image: '/properties/i3.jpg'
    }
  ];

  premiumProperties = [
    {
      title: 'Elegant Villa in Kharadi',
      price: '₹ 2.95 Cr',
      location: 'Kharadi, Pune',
      badge: 'HOT DEAL',
      beds: '4 Beds',
      baths: '4 Baths',
      area: '3800 Sq.Ft',
      image: '/properties/i5.jpg'
    },
    {
      title: 'Premium Villa in Goa',
      price: '₹ 4.20 Cr',
      location: 'Goa',
      badge: 'NEW',
      beds: '5 Beds',
      baths: '5 Baths',
      area: '5000 Sq.Ft',
      image: '/properties/i6.jpg'
    },
    {
      title: 'Luxury Apartment in Worli',
      price: '₹ 6.70 Cr',
      location: 'Worli, Mumbai',
      badge: 'FEATURED',
      beds: '4 Beds',
      baths: '4 Baths',
      area: '3450 Sq.Ft',
      image: '/properties/p1.jpg'
    },
    {
      title: 'Beachfront Villa Goa',
      price: '₹ 8.90 Cr',
      location: 'North Goa',
      badge: 'EXCLUSIVE',
      beds: '5 Beds',
      baths: '6 Baths',
      area: '6300 Sq.Ft',
      image: '/properties/p2.jpg'
    },
    {
      title: 'Premium Apartment',
      price: '₹ 3.85 Cr',
      location: 'Baner, Pune',
      badge: 'NEW LAUNCH',
      beds: '3 Beds',
      baths: '3 Baths',
      area: '2500 Sq.Ft',
      image: '/properties/m3.jpg'
    }
  ];



  viewDetails(property: any) {
    console.log('Selected Property:', property);
  }

  viewAllProperties() {
    console.log('View all properties');
  }

  searchProperties() {
    console.log('Search properties');
  }

}