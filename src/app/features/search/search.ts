import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Property, PropertyService } from '../../shared/service/property.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];

  currentParams: any = {};

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentParams = params;

      if (this.properties.length > 0) {
        this.filterProperties(params);
      }
    });

    this.loadProperties();
  }

  saveSearchState(): void {
    sessionStorage.setItem('propertySearchParams', JSON.stringify(this.currentParams));
  }

  loadProperties(): void {
    this.propertyService.getProperties().subscribe({
      next: (data: Property[]) => {
        this.properties = data;

        const params = this.route.snapshot.queryParams;

        this.currentParams = params;

        this.filterProperties(params);
      },

      error: (error) => {
        this.properties = [];
        this.filteredProperties = [];
      },
    });
  }

  filterProperties(params: any): void {
    if (!this.properties || this.properties.length === 0) {
      this.filteredProperties = [];
      return;
    }

    const location = this.normalize(params['location']);
    const type = this.normalize(params['type']);
    const price = this.normalize(params['price']);
    const bhk = this.normalize(params['bhk']);

    let relatedProperties = this.properties.filter((property) => {
      const locationMatch = !location || this.normalize(property.location) === location;

      const typeMatch = !type || this.normalize(property.type) === type;

      return locationMatch && typeMatch;
    });

    relatedProperties = relatedProperties
      .map((property) => {
        let score = 0;

        if (price && this.checkBudget(property.budget, price)) {
          score += 2;
        }

        if (bhk && this.checkBhk(property.bhk, bhk)) {
          score += 2;
        }

        return {
          property,
          score,
        };
      })
      .sort((a, b) => b.score - a.score)
      .map((item) => item.property);

    this.filteredProperties = relatedProperties;
  }

  checkBudget(propertyBudget: string, selectedPrice: string): boolean {
    const budget = this.normalize(propertyBudget);

    if (selectedPrice === 'under50') {
      return budget === this.normalize('₹20L - ₹50L');
    }

    if (selectedPrice === '50to100') {
      return budget === this.normalize('₹50L - ₹1Cr');
    }

    if (selectedPrice === '1crplus') {
      return budget === this.normalize('₹1Cr+');
    }

    return true;
  }

  checkBhk(propertyBhk: string, selectedBhk: string): boolean {
    const propertyValue = this.normalize(propertyBhk);

    const selectedValue = this.normalize(selectedBhk);

    if (selectedValue === '4+') {
      return propertyValue === this.normalize('4+ BHK');
    }

    if (selectedValue === '1') {
      return propertyValue === this.normalize('1 BHK');
    }

    if (selectedValue === '2') {
      return propertyValue === this.normalize('2 BHK');
    }

    if (selectedValue === '3') {
      return propertyValue === this.normalize('3 BHK');
    }

    return true;
  }

  private normalize(value: unknown): string {
    if (value === null || value === undefined) {
      return '';
    }

    return String(value).trim().toLowerCase();
  }
}
