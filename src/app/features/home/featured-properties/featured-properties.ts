import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [],
  templateUrl: './featured-properties.html',
  styleUrl: './featured-properties.css'
})
export class FeaturedProperties {


  currentIndex = 0;

  cardsToShow = 3;


  properties = [

    {
      image:'img1.jpg',
      badge:'For Sale',
      title:'Luxury Villa',
      location:'Pune, Maharashtra',
      price:'₹1.50 Cr',
      beds:'3 Beds',
      baths:'2 Baths',
      area:'1800 sqft'
    },


    {
      image:'img2.jpg',
      badge:'Featured',
      title:'Modern Apartment',
      location:'Mumbai, Maharashtra',
      price:'₹95 Lakh',
      beds:'2 Beds',
      baths:'2 Baths',
      area:'1200 sqft'
    },


    {
      image:'img3.jpg',
      badge:'New',
      title:'Premium Residence',
      location:'Kolhapur, Maharashtra',
      price:'₹75 Lakh',
      beds:'3 Beds',
      baths:'2 Baths',
      area:'1500 sqft'
    },


    {
      image:'e1.jpg',
      badge:'Luxury',
      title:'Luxury Penthouse',
      location:'Bangalore',
      price:'₹2.30 Cr',
      beds:'4 Beds',
      baths:'3 Baths',
      area:'2800 sqft'
    },


    {
      image:'e2.jpg',
      badge:'Ready',
      title:'Elegant Home',
      location:'Hyderabad',
      price:'₹1.20 Cr',
      beds:'3 Beds',
      baths:'3 Baths',
      area:'2100 sqft'
    },


    {
      image:'e3.jpg',
      badge:'Premium',
      title:'Sky View Apartment',
      location:'Goa',
      price:'₹88 Lakh',
      beds:'2 Beds',
      baths:'2 Baths',
      area:'1400 sqft'
    }

  ];



  constructor(){

    this.updateCards();

  }



  @HostListener('window:resize')

  resize(){

    this.updateCards();

  }



  updateCards(){


    if(window.innerWidth <= 576){

      this.cardsToShow = 1;

    }

    else if(window.innerWidth <= 992){

      this.cardsToShow = 2;

    }

    else{

      this.cardsToShow = 3;

    }


    if(this.currentIndex > this.properties.length - this.cardsToShow){

      this.currentIndex = 0;

    }

  }




  get transform(){


    let move = (100 / this.cardsToShow) * this.currentIndex;


    return `translateX(-${move}%)`;


  }




  next(){


    if(this.currentIndex < this.properties.length - this.cardsToShow){

      this.currentIndex++;

    }

    else{

      this.currentIndex = 0;

    }


  }





  previous(){


    if(this.currentIndex > 0){

      this.currentIndex--;

    }

    else{

      this.currentIndex = this.properties.length - this.cardsToShow;

    }


  }



}