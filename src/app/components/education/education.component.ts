import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type EducationItem = {
  title: string;
  org: string;
  date: string;
  points: string[];
};

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  readonly education: EducationItem[] = [
    {
      title: 'Bachelor of Technology in Computer Science and Engineering (AI/ML)',
      org: "KIT’s College of Engineering, Kolhapur (Autonomous)",
      date: '2023 — 2026',
      points: ['CGPA: 9']
    },
    {
      title: 'Diploma in Computer Engineering',
      org: 'Dr. D.Y. Patil Polytechnic, Kolhapur',
      date: '2020 — 2023',
      points: ['Percentage: 87.09']
    },
    {
      title: 'Secondary School Certificate (SSC)',
      org: 'Maharashtra High School and Junior High School, Kolhapur',
      date: '2020',
      points: ['Percentage: 92.20']
    }
  ];
}

