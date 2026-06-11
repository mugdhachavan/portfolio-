import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type ContactIcon = 'email' | 'phone' | 'linkedin' | 'github';
type ContactInfo = { icon: ContactIcon; label: string; value: string; href?: string };

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() email = 'mugdha.chavan@email.com';
  @Input() phone = '+91 9158425353';
  @Input() location = 'India';
  @Input() linkedin = 'https://www.linkedin.com/in/mugdha-chavan-b49417257/';
  @Input() github = 'https://github.com/mugdhachavan/';

  sent = false;

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  get info(): ContactInfo[] {
    const phoneHref = this.phone.replace(/\s+/g, '');
    return [
      { icon: 'email', label: 'Email', value: this.email, href: `mailto:${this.email}` },
      { icon: 'phone', label: 'Phone', value: this.phone, href: `tel:${phoneHref}` },
      { icon: 'linkedin', label: 'LinkedIn', value: 'View Profile', href: this.linkedin },
      { icon: 'github', label: 'GitHub', value: 'View Repos', href: this.github }
    ];
  }

  submit() {
    this.sent = false;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Placeholder: integrate with EmailJS / backend endpoint if needed.
    // eslint-disable-next-line no-console
    console.log('Contact form submitted', this.form.getRawValue());
    this.sent = true;
    this.form.reset();
  }
}
