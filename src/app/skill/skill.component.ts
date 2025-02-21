import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [TimelineModule,ProgressBarModule,CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  skills = [
    { name: 'Angular', value: 70 },
    { name: 'TypeScript', value:70 },
    { name: 'Tailwind CSS', value: 80 },
    {name:'Html',value:90},
    { name: 'PrimeNG', value: 75 },
  ];
}
