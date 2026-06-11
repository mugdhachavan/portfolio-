import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

type NavIcon = 'bell' | 'cap' | 'home' | 'user' | 'grid' | 'briefcase' | 'mail';
type NavItem = { label: string; href: string; icon: NavIcon };
type ThemeMode = 'dark' | 'light';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input() resumeUrl = 'resume.pdf';

  readonly navItems: NavItem[] = [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'user' },
    { label: 'Education', href: '#education', icon: 'cap' },
    { label: 'Skills', href: '#skills', icon: 'grid' },
    { label: 'Projects', href: '#projects', icon: 'briefcase' },
    { label: 'Experience', href: '#experience', icon: 'bell' },
    { label: 'Contact', href: '#contact', icon: 'mail' }
  ];

  mobileOpen = false;
  scrolled = false;
  theme: ThemeMode = 'dark';
  activeHref = '#home';

  ngOnInit(): void {
    const saved = (localStorage.getItem('theme') as ThemeMode | null) ?? null;
    const preferred: ThemeMode = window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    this.setTheme(saved ?? preferred);
    this.activeHref = window.location.hash || '#home';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  @HostListener('window:hashchange')
  onHashChange() {
    this.activeHref = window.location.hash || '#home';
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    this.setBodyLock(this.mobileOpen);
  }

  closeMobile() {
    this.mobileOpen = false;
    this.setBodyLock(false);
  }

  private setBodyLock(locked: boolean) {
    document.documentElement.classList.toggle('no-scroll', locked);
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  private setTheme(mode: ThemeMode) {
    this.theme = mode;
    document.documentElement.dataset['theme'] = mode === 'light' ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
  }
}
