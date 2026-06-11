import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly profile = {
    name: 'Mugdha Chavan',
    role: 'Full Stack Web Developer',
    location: 'India',
    email: 'mugdha.chavan@email.com',
    phone: '+91 9158425353',
    linkedin: 'https://www.linkedin.com/in/mugdha-chavan-b49417257/',
    github: 'https://github.com/mugdhachavan/',
    resumeUrl: '/resume.pdf'
  };
}
