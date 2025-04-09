import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-opinion',
  imports: [],
  templateUrl: './opinion.component.html',
  styleUrl: './opinion.component.css'
})
export class OpinionComponent {
  @Input() opinion: any;

}
