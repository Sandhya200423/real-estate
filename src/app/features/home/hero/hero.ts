import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [FormsModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  heroImage = '/hero/heron.png';

  searchItems = [
    {
      icon: 'fa-solid fa-location-dot',
      label: 'Location',
      options: ['Select Location', 'Pune', 'Mumbai', 'Kolhapur'],
      selected: 'Select Location',
    },

    {
      icon: 'fa-solid fa-building',
      label: 'Property Type',
      options: ['All Properties', 'Apartment', 'Villa', 'Penthouse'],
      selected: 'All Properties',
    },

    {
      icon: 'fa-solid fa-indian-rupee-sign',
      label: 'Budget',
      options: ['Choose Budget', '₹20L - ₹50L', '₹50L - ₹1Cr', '₹1Cr+'],
      selected: 'Choose Budget',
    },

    {
      icon: 'fa-solid fa-bed',
      label: 'Bedrooms',
      options: ['Any', '1 BHK', '2 BHK', '3 BHK', '4+ BHK'],
      selected: 'Any',
    },
  ];

  searchProperties() {
    console.log('Search clicked');

    console.log(this.searchItems);
  }
}
