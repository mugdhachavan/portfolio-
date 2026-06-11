import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input({ required: true }) name!: string;
  @Input() linkedin = '';
  @Input() github = '';
  readonly year = new Date().getFullYear();
}
