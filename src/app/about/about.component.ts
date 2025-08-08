import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';

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
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private router: Router) {}
  technicalSkills = [
    {
      name: 'Angular',
      level: 85,
      experience: 'above 1year experience',
      color: 'danger',
    },
    {
      name: 'TypeScript',
      level: 80,
      experience: 'above 1year experience',
      color: 'primary',
    },
    {
      name: 'HTML/CSS',
      level: 90,
      experience: 'above 1year experience',
      color: 'warning',
    },
    {
      name: 'JavaScript',
      level: 75,
      experience: 'above 1year experience',
      color: 'success',
    },
    {
      name: 'PrimeNG',
      level: 80,
      experience: 'above 1year experience',
      color: 'info',
    },
    {
      name: 'Tailwind CSS',
      level: 85,
      experience: 'above 1year experience',
      color: 'primary',
    },
  ];

  goToNext() {
    this.router.navigate(['/skill']);
  }
}
