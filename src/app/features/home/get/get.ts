import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [],
  templateUrl: './get.html',
  styleUrl: './get.css'
})
export class Get {

  recommendations = [
    'Personalized Suggestions',
    'Expert Consultation',
    'Best Price Guarantee'
  ];

  getRecommendations() {
    console.log('Getting home recommendations...');
  }

}