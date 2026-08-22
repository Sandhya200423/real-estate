import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { PropertyInfo } from './property-info/property-info';
import { FeaturedProperties } from './featured-properties/featured-properties';
import { WhyChoose } from './why-choose/why-choose';
import { PopularLocation } from './location/location';
import { Get } from './get/get';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, PropertyInfo, FeaturedProperties, WhyChoose, PopularLocation, Get],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
