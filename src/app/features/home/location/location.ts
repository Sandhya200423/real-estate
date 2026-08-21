import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-location',
  standalone: true,
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class PopularLocation {

  locations = [
  {
    name: 'Baner',
    properties: '120+',
    image: '/location/m2.jpg'
  },
  {
    name: 'Kharadi',
    properties: '95+',
    image: '/location/m3.jpg'
  },
  {
    name: 'Kothrud',
    properties: '150+',
    image: '/location/m4.jpg'
  },
  {
    name: 'Hinjewadi',
    properties: '80+',
    image: '/location/m5.jpg'
  }
];

}