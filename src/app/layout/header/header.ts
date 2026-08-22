import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  headerData = {
    logo: '/header/logon.png',
    logoAlt: 'SkyDwell Logo',
    brandName: 'SkyDwell',
    tagline: 'Luxury Real Estate',
    signInText: 'Sign In',
    signInLink: '/signin',
    addPropertyText: 'Add Property',
    addPropertyLink: '/sell',
  };

  navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Properties',
      link: '/properties',
    },
    {
      name: 'Buy',
      link: '/buy',
      dropdown: [
        {
          name: 'Find Your Home',
          fragment: 'find-home',
        },
        {
          name: 'Explore Locations',
          fragment: 'locations',
        },
        {
          name: 'Featured Properties',
          fragment: 'featured',
        },
        {
          name: 'New Launches',
          fragment: 'new-launches',
        },
        {
          name: 'Home Loan & EMI',
          fragment: 'emi',
        },
      ],
    },
    {
      name: 'Sell',
      link: '/sell',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Agents',
      link: '/agents',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact',
      link: '/contactus',
    },
  ];

  menuOpen = false;
  buyDropdownOpen = false;
  isScrolled = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.buyDropdownOpen = false;
  }

  toggleBuyDropdown() {
    this.buyDropdownOpen = !this.buyDropdownOpen;
  }
}
