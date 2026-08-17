import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  menuOpen = false;
  isScrolled = false;
  buyDropdownOpen = false;

  navItems = [
    { name: 'Home', link: '/' },
    { name: 'Properties', link: '/properties' },
    { name: 'Buy', link: '/buy' ,

      dropdown: [
        { name: 'Find Your Home', fragment: 'find-home' },
        { name: 'Explore Locations', fragment: 'locations' },
        { name: 'Featured Properties', fragment: 'featured' },
        { name: 'New Launches', fragment: 'new-launches' },
        { name: 'Home Loan & EMI', fragment: 'emi' },
      ]
    },
    { name: 'Sell', link: '/sell' },
    { name: 'About', link: '/about' },
    { name: 'Agents', link: '/agents' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contactus' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleBuyDropdown() {
    this.buyDropdownOpen = !this.buyDropdownOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.buyDropdownOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 992) {
      this.menuOpen = false;
    }
  }

}