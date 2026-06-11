import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Service = { title: string; desc: string; icon: string };

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      title: 'Responsive Website Development',
      desc: 'Clean, modern, responsive websites that work perfectly on desktop, tablet, and mobile devices.',
      icon: 'UI'
    },
    {
      title: 'Angular Web Application Development',
      desc: 'Scalable Angular apps with reusable components, services, routing, and API integration.',
      icon: 'NG'
    },
    {
      title: 'Full Stack Development',
      desc: 'Complete solutions using frontend, backend, database, authentication, and dashboards.',
      icon: 'FS'
    },
    {
      title: 'AI/ML-Based Web Solutions',
      desc: 'Integrate AI/ML concepts into web apps for automation, prediction, detection, and data insights.',
      icon: 'AI'
    },
    {
      title: 'UI/UX Improvement',
      desc: 'Redesign complex interfaces into clean, user-friendly layouts with better hierarchy and spacing.',
      icon: 'UX'
    }
  ];
}

