import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [NgFor],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  featured = {
    image: '/blog/b4.jpg',
    alt: 'Luxury Property'
  };

  trending = [
    {
      image: '/blog/p1.jpg',
      alt: 'Property Location',
      title: 'Best Locations To Buy Property',
      date: 'Aug 05, 2026'
    },
    {
      image: '/blog/p2.jpg',
      alt: 'Luxury Home',
      title: 'Luxury Homes Investment Guide',
      date: 'Aug 02, 2026'
    },
    {
      image: '/blog/p3.jpg',
      alt: 'Home Buying',
      title: 'Home Buying Checklist',
      date: 'July 28, 2026'
    }
  ];

  blogs = [
    {
      image: '/blog/m2.jpg',
      alt: 'Property Guide',
      category: 'Buying Guide',
      title: 'Complete Guide To Buying Your Dream Home',
      description:
        'Important things to check before investing in your next property.',
      date: 'Aug 01, 2026'
    },
    {
      image: '/blog/m9.jpg',
      alt: 'Luxury Home',
      category: 'Luxury Living',
      title: 'Modern Luxury Homes And Interior Trends',
      description:
        'Explore premium designs that redefine modern living spaces.',
      date: 'July 28, 2026'
    },
    {
      image: '/blog/m4.jpg',
      alt: 'Investment',
      category: 'Investment',
      title: 'Smart Property Investment Strategies',
      description:
        'Learn how to choose the right property for better returns.',
      date: 'July 20, 2026'
    },
    {
      image: '/blog/m5.jpg',
      alt: 'Market Update',
      category: 'Market Update',
      title: 'Real Estate Market Updates 2026',
      description:
        'Latest trends and opportunities in the property market.',
      date: 'July 15, 2026'
    },
    {
      image: '/blog/s2.jpg',
      alt: 'Home Design',
      category: 'Home Design',
      title: 'Beautiful Home Design Ideas For Modern Living',
      description:
        'Create stylish and comfortable spaces with latest designs.',
      date: 'July 10, 2026'
    },
    {
      image: '/blog/m7.jpg',
      alt: 'Villa',
      category: 'Villas',
      title: 'Why Luxury Villas Are Growing In Demand',
      description:
        'Understand the growing demand for premium villa properties.',
      date: 'July 05, 2026'
    }
  ];

  readFeaturedBlog() {
    console.log('Featured blog clicked');
  }

  readBlog(title: string) {
    console.log('Read blog:', title);
  }

  contactUs() {
    console.log('Contact Us clicked');
  }

}