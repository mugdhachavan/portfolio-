import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type Project = {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  imageUrl?: string;
  imageFit?: 'contain' | 'cover';
  imagePosition?: string;
  liveUrl?: string;
  repoUrl?: string;
  category: 'ai' | 'web';
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  activeFilter: 'all' | Project['category'] = 'all';

  readonly projects: Project[] = [
    {
      title: 'Janpath – Election Management System (EMS)',
      description:
        'A centralized EMS integrating real-time data collection, predictive analytics, and AI-powered automation to digitize and optimize campaign management.',
      stack: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'REST APIs', 'HTML', 'CSS', 'JavaScript'],
      features: ['Centralized election workflow', 'Secure auth (JWT)', 'REST API integration', 'Analytics-ready data'],
      repoUrl: 'https://github.com/mugdhachavan/',
      imageUrl: '/projects/logo.png',
      imageFit: 'cover',
      imagePosition: 'center 72%',
      category: 'web'
    },
    {
      title: 'Dynamic Surveillance System',
      description:
        'An AI-powered real-time surveillance system that detects and monitors human activity using live webcam feeds and recorded video streams.',
      stack: ['Python', 'OpenCV', 'YOLO', 'Streamlit', 'Computer Vision'],
      features: ['Real-time detection', 'Threat monitoring', 'Processed output videos', 'Dashboard UI'],
      repoUrl: 'https://github.com/mugdhachavan/',
      imageUrl: '/projects/surveillance.png',
      category: 'ai'
    },
    {
      title: 'Real-Time Traffic Signal Adaptation System',
      description:
        'An intelligent traffic management system that dynamically adapts signal timings using real-time video analysis to reduce congestion and improve flow.',
      stack: ['Python', 'OpenCV', 'YOLO', 'Computer Vision'],
      features: ['Vehicle detection', 'Lane density estimation', 'Adaptive green timing', 'Video-based monitoring'],
      repoUrl: 'https://github.com/mugdhachavan/',
      imageUrl: '/projects/traffic.png',
      category: 'ai'
    },
    {
      title: 'Hospital Management System',
      description:
        'A full-stack hospital management platform with role-based login, patient management, staff modules, HR, attendance, payroll, and responsive dashboards.',
      stack: ['Angular', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT'],
      features: ['Role-based authentication', 'Patient records', 'HR dashboard', 'Responsive UI', 'REST API integration'],
      liveUrl: '#contact',
      imageUrl: '/projects/HMS.png',
      category: 'web'
    },
    {
      title: 'AI-Based Surveillance & Detection',
      description:
        'An AI-based human intrusion detection system using video input and ML concepts for real-time monitoring and alert generation.',
      stack: ['Python', 'OpenCV', 'AI/ML', 'FastAPI', 'Angular'],
      features: ['Video processing', 'Human detection', 'Alert system', 'Dashboard integration', 'AI/ML monitoring'],
      liveUrl: '#contact',
      repoUrl: 'https://github.com/mugdhachavan/ai-surveillance',
      imageUrl: '/projects/surveillance.png',
      imageFit: 'cover',
      imagePosition: 'center',
      category: 'ai'
    },
    {
      title: 'Residential Development Dashboard',
      description:
        'A responsive real estate dashboard for plot availability, block-wise land distribution, revenue insights, and development strategy.',
      stack: ['Angular', 'TypeScript', 'UI/UX', 'Charts', 'Responsive Design'],
      features: ['Plot availability view', 'Block-wise data', 'Revenue cards', 'Professional layout', 'Responsive dashboard'],
      liveUrl: '#contact',
      imageUrl: '/projects/residential-dev.png',
      category: 'web'
    },
    {
      title: 'Van AI Dashboard',
      description: 'A modern dashboard with map-based visualization, risk intelligence, and smart module-based layout.',
      stack: ['Angular', 'TypeScript', 'Leaflet/Maps'],
      features: ['Interactive map', 'Dashboard cards', 'Module layout', 'Responsive UI'],
      liveUrl: '#contact',
      imageUrl: '/projects/van-ai.png',
      category: 'web'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => p.category === this.activeFilter);
  }

  openDetails(project: Project) {
    this.selectedProject = project;
    document.documentElement.classList.add('no-scroll');
  }

  closeDetails() {
    this.selectedProject = null;
    document.documentElement.classList.remove('no-scroll');
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.selectedProject) this.closeDetails();
  }
}
