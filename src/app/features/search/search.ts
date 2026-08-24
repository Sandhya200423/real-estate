import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('QUERY PARAMS:', params);

      if (this.properties.length > 0) {
        this.filterProperties(params);
      }
    });

    this.loadProperties();
  }

  // =====================================================
  // LOAD PROPERTIES
  // =====================================================

  loadProperties(): void {
    this.propertyService.getProperties().subscribe({
      next: (data: Property[]) => {
        console.log('RAW DATA:', data);

        this.properties = data;

        console.log('ALL PROPERTIES:', this.properties);

        this.route.queryParams.subscribe((params) => {
          this.filterProperties(params);
        });
      },

      error: (error) => {
        console.error('DB JSON ERROR:', error);

        this.properties = [];
        this.filteredProperties = [];

        this.cdr.detectChanges();
      },
    });
  }

  // =====================================================
  // MAIN SEARCH
  // =====================================================

  filterProperties(params: any): void {
    if (!this.properties || this.properties.length === 0) {
      this.filteredProperties = [];
      return;
    }

    const location = this.normalize(params['location']);

    const type = this.normalize(params['type']);

    const price = this.normalize(params['price']);

    const bhk = this.normalize(params['bhk']);

    console.log('==============================');
    console.log('LOCATION:', location);
    console.log('TYPE:', type);
    console.log('PRICE:', price);
    console.log('BHK:', bhk);
    console.log('==============================');

    const sameLocation = this.properties.filter((property) => {
      if (!location) {
        return true;
      }

      return this.normalize(property.location) === location;
    });

    console.log('SAME LOCATION PROPERTIES:', sameLocation);

    const exactMatches = sameLocation.filter((property) => {
      const typeMatch = !type || this.normalize(property.type) === type;

      const budgetMatch = !price || this.checkBudget(property.budget, price);

      const bhkMatch = !bhk || this.checkBhk(property.bhk, bhk);

      return typeMatch && budgetMatch && bhkMatch;
    });

    console.log('EXACT MATCHES:', exactMatches);

    if (exactMatches.length > 0) {
      this.filteredProperties = exactMatches;

      console.log('SHOWING EXACT MATCHES:', this.filteredProperties);

      console.log('RESULT COUNT:', this.filteredProperties.length);

      this.cdr.detectChanges();

      return;
    }

    const relatedProperties = sameLocation
      .map((property) => {
        let score = 0;

        // Property Type
        if (type && this.normalize(property.type) === type) {
          score += 3;
        }

        // Budget
        if (price && this.checkBudget(property.budget, price)) {
          score += 2;
        }

        // BHK
        if (bhk && this.checkBhk(property.bhk, bhk)) {
          score += 2;
        }

        return {
          property,
          score,
        };
      })

      .filter((item) => item.score > 0)

      .sort((a, b) => b.score - a.score)

      .map((item) => item.property);

    this.filteredProperties = relatedProperties;

    console.log('RELATED PROPERTIES:', this.filteredProperties);

    console.log('RESULT COUNT:', this.filteredProperties.length);

    this.cdr.detectChanges();
  }

  // =====================================================
  // BUDGET CHECK
  // =====================================================

  checkBudget(propertyBudget: string, selectedPrice: string): boolean {
    const budget = this.normalize(propertyBudget);

    // ₹20L - ₹50L
    if (selectedPrice === 'under50') {
      return budget === this.normalize('₹20L - ₹50L');
    }

    // ₹50L - ₹1Cr
    if (selectedPrice === '50to100') {
      return budget === this.normalize('₹50L - ₹1Cr');
    }

    // ₹1Cr+
    if (selectedPrice === '1crplus') {
      return budget === this.normalize('₹1Cr+');
    }

    return true;
  }

  // =====================================================
  // BHK CHECK
  // =====================================================

  checkBhk(propertyBhk: string, selectedBhk: string): boolean {
    const propertyValue = this.normalize(propertyBhk);

    const selectedValue = this.normalize(selectedBhk);

    // 4+ BHK
    if (selectedValue === '4+') {
      return propertyValue === this.normalize('4+ BHK');
    }

    // 1 BHK
    if (selectedValue === '1') {
      return propertyValue === this.normalize('1 BHK');
    }

    // 2 BHK
    if (selectedValue === '2') {
      return propertyValue === this.normalize('2 BHK');
    }

    // 3 BHK
    if (selectedValue === '3') {
      return propertyValue === this.normalize('3 BHK');
    }

    return true;
  }

  // =====================================================
  // NORMALIZE
  // =====================================================

  private normalize(value: unknown): string {
    if (value === null || value === undefined) {
      return '';
    }

    return String(value).trim().toLowerCase();
  }
}
