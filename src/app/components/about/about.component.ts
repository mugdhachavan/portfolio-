import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type AboutCard = { title: string; desc: string };

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly cards: AboutCard[] = [
    { title: 'Frontend Development', desc: 'Angular, TypeScript, UI systems, reusable components' },
    { title: 'Backend Development', desc: 'Node.js, Express, REST APIs, authentication flows' },
    { title: 'Database Management', desc: 'MySQL, Sequelize ORM, schema design & optimization' },
    { title: 'AI/ML Knowledge', desc: 'Python, preprocessing, CV basics, model concepts' },
    { title: 'Responsive UI Design', desc: 'Mobile-first layouts, clean spacing, accessibility' },
    { title: 'API Integration', desc: 'Secure API consumption, error handling, performance' }
  ];
}
