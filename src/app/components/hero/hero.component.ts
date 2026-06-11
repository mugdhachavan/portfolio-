import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type TechPill = { label: string; subtle?: boolean };
type FloatingCard = { title: string; desc: string };

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) role!: string;
  @Input() resumeUrl = '/resume.pdf';

  readonly headlineChips = ['Angular Developer', 'Full Stack Developer', 'AI/ML Enthusiast'];

  readonly techPills: TechPill[] = [
    { label: 'Angular' },
    { label: 'TypeScript' },
    { label: 'Node.js' },
    { label: 'Express' },
    { label: 'MySQL' },
    { label: 'Python' },
    { label: 'AI/ML', subtle: true }
  ];

  readonly floating: FloatingCard[] = [
    { title: 'Responsive UI', desc: 'Pixel-perfect, accessible layouts' },
    { title: 'Full Stack Apps', desc: 'APIs, auth, dashboards, CRUD' },
    { title: 'AI/ML Integration', desc: 'Computer vision & automation' },
    { title: 'Clean Code', desc: 'Reusable, maintainable components' }
  ];
}

