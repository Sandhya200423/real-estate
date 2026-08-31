import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  heroImage = '/hero/heron.png';

  constructor(private router: Router) {}

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

  searchProperties(): void {
    const location = this.searchItems[0].selected;
    const type = this.searchItems[1].selected;
    const budget = this.searchItems[2].selected;
    const bedrooms = this.searchItems[3].selected;

    const nothingSelected =
      location === 'Select Location' &&
      type === 'All Properties' &&
      budget === 'Choose Budget' &&
      bedrooms === 'Any';

    if (nothingSelected) {
      return;
    }

    this.router.navigate(['/search'], {
      queryParams: {
        location: location !== 'Select Location' ? location : null,

        type: type !== 'All Properties' ? type : null,

        price:
          budget === '₹20L - ₹50L'
            ? 'under50'
            : budget === '₹50L - ₹1Cr'
              ? '50to100'
              : budget === '₹1Cr+'
                ? '1crplus'
                : null,

        bhk: bedrooms !== 'Any' ? bedrooms.replace(' BHK', '') : null,
      },
    });
  }
}
