import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell {
  hero = {
    subtitle: 'SELL YOUR PROPERTY',
    title: 'Sell Your Property',
    highlight: 'Faster With Verified Buyers',
    description:
      'Reach thousands of genuine buyers across India. List your property with SkyDwell and get the best market value without any hassle.',
    button: 'List Property',
  };

  sellFeatures = ['Free Listing', 'Verified Buyers', 'Zero Brokerage'];

  whySell = {
    subtitle: 'WHY SELL WITH SKYDWELL',
    title: 'Sell Smarter, Sell Faster',
    description:
      'We help homeowners sell faster with verified buyers, professional marketing and transparent documentation. From listing to registration, we manage everything.',
  };

  sellCards = [
    {
      icon: 'fa-house-circle-check',
      title: 'Free Property Listing',
      description: 'List your property with zero hidden charges and reach thousands of buyers.',
    },
    {
      icon: 'fa-user-check',
      title: 'Verified Buyers',
      description: 'Connect with genuine buyers looking for properties.',
    },
    {
      icon: 'fa-bullhorn',
      title: 'Premium Marketing',
      description: 'Professional photos and maximum property visibility.',
    },
    {
      icon: 'fa-scale-balanced',
      title: 'Legal Assistance',
      description: 'Complete documentation support till final deal closure.',
    },
  ];

  trustStats = [
    { number: '10,000+', label: 'Active Buyers' },
    { number: '1500+', label: 'Properties Sold' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '25+', label: 'Cities Covered' },
  ];

  propertyTypes = ['Apartment', 'Villa', 'Plot', 'Commercial'];

  propertyFor = ['Sell', 'Rent'];

  states = ['Maharashtra', 'Karnataka', 'Goa'];

  cities = ['Pune', 'Mumbai', 'Kolhapur'];

  bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'];

  bathroomOptions = ['1', '2', '3', '4'];

  balconyOptions = ['0', '1', '2', '3+'];

  floorOptions = ['1', '2', '5', '10', '20+'];

  propertyFloorOptions = ['Ground', '1', '2', '3', 'Top Floor'];

  propertyAgeOptions = ['New', '0 - 1 Years', '1 - 5 Years', '5 - 10 Years', '10+ Years'];

  facingOptions = ['East', 'West', 'North', 'South'];

  furnishingOptions = ['Fully Furnished', 'Semi Furnished', 'Unfurnished'];

  ownershipOptions = ['Freehold', 'Leasehold', 'Co-operative Society'];

  parkingOptions = ['1 Car', '2 Cars', 'Bike Parking', 'No Parking'];

  negotiableOptions = ['Yes', 'No'];

  amenities = [
    { icon: 'fa-car', name: 'Parking' },
    { icon: 'fa-elevator', name: 'Lift' },
    { icon: 'fa-dumbbell', name: 'Gym' },
    { icon: 'fa-water-ladder', name: 'Swimming Pool' },
    { icon: 'fa-tree', name: 'Garden' },
    { icon: 'fa-shield-halved', name: 'Security' },
    { icon: 'fa-video', name: 'CCTV' },
    { icon: 'fa-bolt', name: 'Power Backup' },
    { icon: 'fa-users', name: 'Club House' },
    { icon: 'fa-child', name: 'Kids Play Area' },
    { icon: 'fa-fire-extinguisher', name: 'Fire Safety' },
    { icon: 'fa-square-parking', name: 'Visitor Parking' },
  ];

  userRoles = ['Owner', 'Agent', 'Builder'];

  tips = [
    'Fill accurate details',
    'Upload high quality photos',
    'Mention nearby landmarks',
    'Keep contact number active',
  ];

  whySkyDwell = ['Verified Buyers', 'Professional Support', 'Fast Listing', 'Secure Process'];

  sellingProcess = [
    {
      icon: 'fa-file-circle-plus',
      title: 'List Property',
      description: 'Fill basic details and upload property images.',
    },
    {
      icon: 'fa-circle-check',
      title: 'Verification',
      description: 'Our team verifies your property details.',
    },
    {
      icon: 'fa-bullhorn',
      title: 'Promotion',
      description: 'We promote your property to verified buyers.',
    },
    {
      icon: 'fa-users',
      title: 'Buyer Visits',
      description: 'Interested buyers visit your property.',
    },
    {
      icon: 'fa-handshake',
      title: 'Deal Closed',
      description: 'Complete documentation and receive payment.',
    },
  ];

  property: any = {
    title: '',
    propertyType: '',
    propertyFor: 'Sell',
    expectedPrice: '',
    carpetArea: '',
    description: '',
    state: '',
    city: '',
    locality: '',
    landmark: '',
    pinCode: '',
    address: '',
    bhk: '',
    bathrooms: '',
    balconies: '',
    builtUpArea: '',
    totalFloors: '',
    propertyFloor: '',
    propertyAge: '',
    facing: '',
    furnishing: '',
    ownership: '',
    parking: '',
    priceNegotiable: '',
    maintenance: '',
    bookingAmount: '',
    monthlyRent: '',
    securityDeposit: '',
    fullName: '',
    mobile: '',
    email: '',
    role: '',
    additionalInformation: '',
  };

  selectedImages: File[] = [];

  listProperty() {
    console.log('List Property clicked');
  }

  onImagesSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      this.selectedImages = Array.from(input.files);
    }
  }

  saveDraft() {
    console.log('Property draft saved', this.property);
  }

  submitProperty() {
    console.log('Property submitted', this.property);
  }
}
