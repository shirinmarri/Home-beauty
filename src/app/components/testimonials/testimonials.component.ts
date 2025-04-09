import { Component } from '@angular/core';
import { OpinionComponent} from './opinion/opinion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [ OpinionComponent ,CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
listOfOpinions =[
  {name:' Razi' , city:'Tehran' , view:' "It was truly an excellent experience! The barber arrived right on time and worked very professionally and meticulously. From now on, I’ll always use this service."' , imageUrl:'./images/Razi.png'},
  {name:'Sara ' , city:'Mashad' , view:'"It was really comfortable just sitting at home and getting the service. I loved the quality of the work, and the barber was so professional and friendly!"' , imageUrl:'./images/Sara1.png'},
  {name:'Marry ' , city:'Shiraz' , view:'"It’s amazing to have such professional service so conveniently at home. The barber did a very neat and tidy job. I’m truly grateful to your team!"' , imageUrl:'./images/Marry.png'}

]

}
