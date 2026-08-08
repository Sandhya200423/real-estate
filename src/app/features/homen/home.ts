import { Component } from '@angular/core';

import { HeroComponent } from '../../features/home/hero/hero';
import { PropertyInfoComponent } from '../../features/home/property-info/property-info';
import { FeaturedProperties } from '../../features/home/featured-properties/featured-properties';
import { WhyChoose } from '../../features/home/why-choose/why-choose';

import { PopularLocation } from '../../features/home/location/location';
import { Get } from "../home/get/get";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    PropertyInfoComponent,
    FeaturedProperties,
    WhyChoose,
    PopularLocation,
    Get
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}