import { Component } from '@angular/core';
import { ServicCardComponent} from './servic-card/servic-card.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-services-container',
  standalone: true,
  imports: [ CommonModule , ServicCardComponent],
  templateUrl: './services-container.component.html',
  
})
export class ServicesContainerComponent {
  listOfServices  = [ 
    {name: 'Skin Cares' , image:'./images/Skincare-bro 1.png' } ,
    { name: 'Eyebrows and Tattoo' , image:'./images/Makeup artist-bro 1.png'} ,
    { name:'Massage' , image:'./images/Facial massage.png'} ,
    { name:'Nails Services' , image:'./images/Manicurist.png'} ,
    { name:'Hair Services'  , image:'./images/Hairdresser.png' } ,
    { name: 'Eyelash Services', image:'./images/Eyes.png'} ,
    { name:'Facial Hair Removal' , image:'./images/Makeup artist.png'} ,
    { name: 'Makeup Services', image:'./images/Waterproof.png'} 


  ]
}