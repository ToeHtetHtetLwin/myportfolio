import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute} from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    CarouselModule,
    ProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public date = Date.UTC(2025,0,2);
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  technicalSkills = [
    {
      id: 1,
      name: 'Angular',
      level: 85,
      experience: '1year experience',
      color: 'danger',
    },
    {
      id: 2,
      name: 'TypeScript',
      level: 80,
      experience: '1year experience',
      color: 'primary',
    },
    {
      id: 3,
      name: 'HTML/CSS',
      level: 90,
      experience: '1year experience',
      color: 'warning',
    },
    {
      id: 4,
      name: 'JavaScript',
      level: 75,
      experience: '1year experience',
      color: 'success',
    },
  ];

  public projects = [
    {
      id: 1,
      title: 'Notification App',
      description: 'A responsive notification application using Angular and PrimeNG.',
      image:
        'assets/m1.png'
    },
    {
      id: 2,
      title: 'E-commerce App',
      description: 'A fully responsive e-commerce application using Angular and PrimeNG.',
      image:
        'assets/s1.png'
    },
    {
      id: 3,
      title: 'Angular Portfolio Website',
      description: 'My personal portfolio site built with Angular and PrimeNG.',
      image:
        'assets/pj1.png'
    }
  ];

  goToGitHub() {
    window.open('https://github.com/ToeHtetHtetLwin', '_blank');
  }

  goToFacebook() {
    window.open('https://facebook.com', '_blank');
  }

  goToDiscord() {
    window.open('https://discord.com/', '_blank');
  }
}
