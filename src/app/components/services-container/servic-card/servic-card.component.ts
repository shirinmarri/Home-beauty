import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-servic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servic-card.component.html',
  styleUrl: './servic-card.component.css'
})
export class ServicCardComponent {
  @Input() service: any;
  

}
