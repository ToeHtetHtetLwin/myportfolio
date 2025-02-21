import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonModule,CommonModule,ProgressBarModule,CardModule,AvatarModule,TagModule,TimelineModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router:Router){}
  timelineEvents = [
    { year: '2024', event: 'Started working as a Frontend Developer' },
    { year: '2024', event: 'Completed my Degree in Computer Science' },
    { year: '2024', event: 'Built my first Web Application' },
    
  ];
   goToNext(){
    this.router.navigate(['/skill'])
   }

}
