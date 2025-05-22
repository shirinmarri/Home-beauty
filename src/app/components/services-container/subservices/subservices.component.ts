import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subservices',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './subservices.component.html',
  styleUrl: './subservices.component.css'
})
export class SubservicesComponent {
  @Input() service: any;
  
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.service = nav?.extras?.state?.['service'];
  }
}
