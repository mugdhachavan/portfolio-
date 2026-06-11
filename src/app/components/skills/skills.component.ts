import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type SkillCategory = { title: string; skills: string[] };

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Angular Material',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API', 'Authentication', 'JWT', 'CRUD Operations']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'Sequelize ORM', 'phpMyAdmin', 'Database Design']
    },
    {
      title: 'AI/ML Knowledge',
      skills: [
        'Python',
        'Machine Learning Basics',
        'Data Preprocessing',
        'Model Training Concepts',
        'Computer Vision Basics',
        'AI-Based Automation'
      ]
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitLab', 'VS Code', 'Postman', 'Overleaf']
    }
  ];
}
