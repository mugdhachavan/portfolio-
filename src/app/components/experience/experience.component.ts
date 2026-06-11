import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TimelineItem = {
  title: string;
  org?: string;
  date: string;
  points: string[];
  icon: 'work' | 'study' | 'ai';
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly items: TimelineItem[] = [
    {
      title: 'Web Application Developer',
      org: 'Zerovaega Technologies Pvt. Ltd.',
      date: '2026',
      icon: 'work',
      points: [
        'Built Angular-based dashboards with reusable components and clean layouts',
        'Integrated REST APIs, authentication flows, and role-based access',
        'Worked with MySQL-backed modules, validation, and error handling'
      ]
    },
  ];

  iconLabel(icon: TimelineItem['icon']) {
    if (icon === 'work') return 'Work';
    if (icon === 'ai') return 'AI';
    return 'Study';
  }
}
