import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Property, PropertyService } from '../../shared/service/property.service';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-details.html',
  styleUrl: './property-details.css',
})
export class PropertyDetails implements OnInit {
  property: Property | undefined;
  loading = true;

  galleryImages: string[] = [];
  selectedImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.loadProperty(id);
    });
  }

  loadProperty(id: number): void {
    this.loading = true;

    this.propertyService.getProperties().subscribe({
      next: (properties: Property[]) => {
        this.property = properties.find((item) => Number(item.id) === Number(id));

        if (this.property) {
          this.galleryImages = this.property.gallery || [this.property.image];
        } else {
          this.galleryImages = [];
        }

        this.selectedImageIndex = 0;
        this.loading = false;
      },

      error: () => {
        this.property = undefined;
        this.galleryImages = [];
        this.loading = false;
      },
    });
  }

  selectImage(index: number): void {
    if (index >= 0 && index < this.galleryImages.length) {
      this.selectedImageIndex = index;
    }
  }

  previousImage(): void {
    if (this.galleryImages.length === 0) {
      return;
    }

    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.galleryImages.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }

  nextImage(): void {
    if (this.galleryImages.length === 0) {
      return;
    }

    if (this.selectedImageIndex === this.galleryImages.length - 1) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  goBack(): void {
    const savedParams = sessionStorage.getItem('propertySearchParams');

    if (savedParams) {
      try {
        const queryParams = JSON.parse(savedParams);

        this.router.navigate(['/search'], {
          queryParams: queryParams,
        });
      } catch (error) {
        this.router.navigate(['/search']);
      }
    } else {
      this.router.navigate(['/search']);
    }
  }
}
