import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule, NgFor],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  properties = ['Apartment', 'Villa', 'Commercial', 'Farm House'];

  contactForm = {
    name: '',
    email: '',
    phone: '',
    property: '',
    message: '',
  };

  features = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Trusted & Verified',
      description: 'All properties are verified for your peace of mind.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Expert Support',
      description: 'Our team is always ready to assist you.',
    },
    {
      icon: 'fa-regular fa-circle-check',
      title: 'Best Deals',
      description: 'Get the best deals on premium properties.',
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Smooth Process',
      description: 'We make your property journey easy & smooth.',
    },
  ];

  sendMessage() {
    console.log('Contact Form:', this.contactForm);
  }
}
