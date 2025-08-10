import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';
import { KnobModule } from 'primeng/knob';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    AnimateOnScrollModule,
    CardModule,
    ProgressBarModule,
    ChipModule,
    TabViewModule,
    KnobModule,
    CarouselModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private router: Router) {}
  technicalSkills = [
    {
      id: 1,
      name: 'Angular',
      level: 85,
      experience: 'above 1year experience',
      color: 'danger',
    },
    {
      id: 2,
      name: 'TypeScript',
      level: 80,
      experience: 'above 1year experience',
      color: 'primary',
    },
    {
      id: 3,
      name: 'HTML/CSS',
      level: 90,
      experience: 'above 1year experience',
      color: 'warning',
    },
    {
      id: 4,
      name: 'JavaScript',
      level: 75,
      experience: 'above 1year experience',
      color: 'success',
    },
  ];

 public projects = [
  {
    id: 1,
    title: 'Angular Portfolio Website',
    description: 'My personal portfolio site built with Angular and PrimeNG.',
    screenshots: [
      'assets/pj1.png'
      
    ],
    github: 'https://github.com/username/angular-portfolio',
    liveDemo: 'https://myportfolio.example.com'
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'A fully responsive e-commerce application using Angular and PrimeNG.',
    screenshots: [
      'assets/project2-1.png',
      'assets/project2-2.png'
    ],
    github: 'https://github.com/username/ecommerce-app',
    liveDemo: 'https://ecommerce.example.com'
  }
];

  goToNext() {
    this.router.navigate(['/skill']);
  }
}
