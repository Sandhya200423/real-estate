import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Property, PropertyService } from '../../shared/service/property.service';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './property-details.html',
  styleUrl: './property-details.css',
})
export class PropertyDetails implements OnInit {
  property: Property | undefined;
  loading = true;

  galleryImages: string[] = [];
  selectedImageIndex = 0;

  showEnquiry = false;
  enquirySubmitted = false;

  enquiry = {
    name: '',
    mobile: '',
    email: '',
    message: '',
  };

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      console.log('URL ID:', id);

      this.loadProperty(id);
    });
  }

  loadProperty(id: number): void {
    this.loading = true;

    this.propertyService.getProperties().subscribe({
      next: (properties: Property[]) => {
        console.log('ALL PROPERTIES:', properties);

        this.property = properties.find((item) => Number(item.id) === Number(id));

        console.log('SELECTED PROPERTY:', this.property);

        if (this.property) {
          const propertyWithGallery = this.property as Property & {
            gallery?: string[];
          };

          if (propertyWithGallery.gallery && propertyWithGallery.gallery.length > 0) {
            this.galleryImages = propertyWithGallery.gallery;
          } else {
            const imageMap: { [key: number]: string[] } = {
              1: ['/search/s1.jpg', '/search/1.jpg', '/search/2.jpg', '/search/3.jpg'],

              2: ['/search/s2.jpg', '/search/4.jpg', '/search/5.jpg', '/search/6.jpg'],

              3: ['/search/s3.jpg', '/search/7.jpg', '/search/8.jpg', '/search/9.jpg'],

              4: ['/search/s4.jpg', '/search/10.jpg', '/search/11.jpg', '/search/12.jpg'],

              5: ['/search/s5.jpg', '/search/13jpg', '/search/.14jpg', '/search/15.jpg'],

              6: ['/search/s6.jpg', '/search/16.jpg', '/search/17.jpg', '/search/18.jpg'],

              7: ['/search/s7.jpg', '/search/19.jpg', '/search/20.jpg', '/search/21.jpg'],

              8: ['/search/s8.jpg', '/search/22.jpg', '/search/23.jpg', '/search/24.jpg'],

              9: ['/search/s9.jpg', '/search/25.jpg', '/search/26.jpg', '/search/27.jpg'],

              10: ['/search/s10.jpg', '/search/28.jpg', '/search/29.jpg', '/search/30.jpg'],

              11: ['/search/s11.jpg', '/search/31.jpg', '/search/32.jpg', '/search/33.jpg'],

              12: ['/search/s12.jpg', '/search/34.jpg', '/search/35.jpg', '/search/36.jpg'],

              13: ['/search/s13.jpg', '/search/37.jpg', '/search/38.jpg', '/search/39.jpg'],

              14: ['/search/s14.jpg', '/search/40.jpg', '/search/41.jpg', '/search/42.jpg'],

              15: ['/search/s15.jpg', '/search/43.jpg', '/search/44.jpg', '/search/45.jpg'],
            };

            this.galleryImages = imageMap[Number(this.property.id)] || [this.property.image];
          }
        } else {
          this.galleryImages = [];
        }

        this.selectedImageIndex = 0;

        this.loading = false;

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('PROPERTY DETAILS ERROR:', error);

        this.property = undefined;
        this.galleryImages = [];
        this.loading = false;

        this.cdr.detectChanges();
      },
    });
  }

  selectImage(index: number): void {
    if (index >= 0 && index < this.galleryImages.length) {
      this.selectedImageIndex = index;

      this.cdr.detectChanges();
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

    this.cdr.detectChanges();
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

    this.cdr.detectChanges();
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
        console.error('SEARCH PARAM ERROR:', error);

        this.router.navigate(['/search']);
      }
    } else {
      this.router.navigate(['/search']);
    }
  }

  openEnquiry(): void {
    console.log('ENQUIRE BUTTON CLICKED');

    this.showEnquiry = true;
    this.enquirySubmitted = false;

    this.cdr.detectChanges();
  }

  closeEnquiry(): void {
    console.log('CLOSE ENQUIRY');

    this.showEnquiry = false;
  }

  sendEnquiry(): void {
    if (
      !this.enquiry.name.trim() ||
      !this.enquiry.mobile.trim() ||
      !this.enquiry.email.trim() ||
      !this.enquiry.message.trim()
    ) {
      alert('Please fill all the fields.');

      return;
    }

    console.log('ENQUIRY DETAILS:', {
      property: this.property,
      customer: this.enquiry,
    });

    this.enquirySubmitted = true;

    this.enquiry = {
      name: '',
      mobile: '',
      email: '',
      message: '',
    };

    this.cdr.detectChanges();
  }
}
