import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    CarouselModule,
    ProgressSpinnerModule,
    RouterLink,
    DividerModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public date = Date.UTC(2025, 0, 2);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        document
          .getElementById(fragment)
          ?.scrollIntoView({ behavior: 'smooth' });
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
    // {
    //   id: 1,
    //   title: 'Notification App',
    //   description:
    //     'A responsive notification application using Angular and PrimeNG.',
    //   image: 'assets/m1.png',
    //   demourl: '',
    //   githuburl: 'https://github.com/ToeHtetHtetLwin/shopping',
    // },
    {
      id: 1,
      title: 'E-commerce App',
      description:
        'A fully responsive e-commerce application using Angular and PrimeNG.Showing just the frontend design for the app by using angular signal which automatically notifies any part of the application that depends on it when its value changes.',
      image: 'assets/e-commerce.png',
      demourl: 'https://toehtethtetlwin.github.io/shopping/#/login',
      githuburl: 'https://github.com/ToeHtetHtetLwin/shopping',
    },
    {
      id: 2,
      title: 'Angular Portfolio Website',
      description: 'A personal portfolio website built with Angular and PrimeNG, featuring optimized performance using Angular Defer for component lazy loading.',
      image: 'assets/portfolio.png',
      demourl: 'https://myportfolio-thhl.vercel.app/',
      githuburl: 'https://github.com/ToeHtetHtetLwin/myportfoliog',
    },
  ];

  goToGitHub() {
    window.open('https://github.com/ToeHtetHtetLwin', '_blank');
  }

  goToFacebook() {
    window.open('https://www.facebook.com/share/1BRbrLVxYM/', '_blank');
  }

  goToDiscord() {
    window.open('https://discord.com/', '_blank');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/toetoeCV.pdf';
    link.download = 'Toe-Htet-Htet-Lwin-CV.pdf';
    link.click();
  }

  goToLiveDemo(url: any) {
    window.open(url, '_blank');
  }

  goToGit(url: any) {
    window.open(url, '_blank');
  }
}
