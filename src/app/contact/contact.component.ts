

import { Component } from '@angular/core';

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  href: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,   // ✅ important
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'phone',
      title: 'Phone',
      details: '+27 71 507 1778',
      href: 'tel:+27715071778',
      color: 'bg-green-500'
    },
    {
      icon: 'mail',
      title: 'Email',
      details: 'lifelebisi20@gmail.com',
      href: 'mailto:lifelebisi20@gmail.com',
      color: 'bg-blue-500'
    },
    {
      icon: 'location',
      title: 'Location',
      details: 'Johannesburg, South Africa',
      href: 'https://www.google.com/maps?q=Johannesburg,+South+Africa',
      color: 'bg-purple-500'
    }
  ];

  onSubmit(event: Event): void {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  }
}
