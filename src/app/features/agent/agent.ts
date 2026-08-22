import { Component } from '@angular/core';

@Component({
  selector: 'app-agent',
  imports: [],
  templateUrl: './agent.html',
  styleUrl: './agent.css',
})
export class Agent {
  exploreAgents() {
    console.log('Explore Agents clicked');
  }

  contactUs() {
    console.log('Contact Us clicked');
  }

  exploreProperties() {
    console.log('Explore Properties clicked');
  }

  getFreeConsultation() {
    console.log('Get Free Consultation clicked');
  }

  contactNow() {
    console.log('Contact Now clicked');
  }
}
