import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-properties',
  imports: [RouterLink],
  templateUrl: './featured-properties.html',
  styleUrl: './featured-properties.css',
})
export class FeaturedProperties {
  properties = [
    {
      image: '/featured property/img1.jpg',
      badge: 'For Sale',
      title: 'Luxury Villa',
      location: 'Pune, Maharashtra',
      price: '₹1.50 Cr',
      beds: '3 Beds',
      baths: '2 Baths',
      area: '1800 sqft',
    },
    {
      image: '/featured property/img2.jpg',
      badge: 'Featured',
      title: 'Modern Apartment',
      location: 'Mumbai, Maharashtra',
      price: '₹95 Lakh',
      beds: '2 Beds',
      baths: '2 Baths',
      area: '1200 sqft',
    },
    {
      image: '/featured property/img3.jpg',
      badge: 'New',
      title: 'Premium Residence',
      location: 'Kolhapur, Maharashtra',
      price: '₹75 Lakh',
      beds: '3 Beds',
      baths: '2 Baths',
      area: '1500 sqft',
    },
    {
      image: '/featured property/e1.jpg',
      badge: 'Luxury',
      title: 'Luxury Penthouse',
      location: 'Bangalore',
      price: '₹2.30 Cr',
      beds: '4 Beds',
      baths: '3 Baths',
      area: '2800 sqft',
    },
    {
      image: '/featured property/e2.jpg',
      badge: 'Ready',
      title: 'Elegant Home',
      location: 'Hyderabad',
      price: '₹1.20 Cr',
      beds: '3 Beds',
      baths: '3 Baths',
      area: '2100 sqft',
    },
    {
      image: '/featured property/e3.jpg',
      badge: 'Premium',
      title: 'Sky View Apartment',
      location: 'Goa',
      price: '₹88 Lakh',
      beds: '2 Beds',
      baths: '2 Baths',
      area: '1400 sqft',
    },
  ];

  currentIndex = 0;
  transform = 'translateX(0)';

  next() {
    if (this.currentIndex < this.properties.length - 1) {
      this.currentIndex++;
      this.updateSlider();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider();
    }
  }

  updateSlider() {
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  toggleWishlist(property: any) {
    console.log('Wishlist:', property.title);
  }
}
