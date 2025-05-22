import { Component  } from '@angular/core';
import { ServicCardComponent} from './servic-card/servic-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SelectedStaffesComponent } from '../selected-staffes/selected-staffes.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { JoinUsComponent} from '../join-us/join-us.component';




@Component({
  selector: 'app-services-container',
  standalone: true,
  imports: [ CommonModule , 
        ServicCardComponent,
        HeroSectionComponent,
        AboutUsComponent,
        SelectedStaffesComponent,
        BlogsComponent,
        TestimonialsComponent,
        JoinUsComponent
  ],
  templateUrl: './services-container.component.html',
  
})
export class ServicesContainerComponent {
  constructor(private router: Router) {}
[x: string]: any;
  listOfServices  = [ 
    {name: 'Skin Cares' , image:'./images/Skincare-bro 1.png',
     
      
      subServices: [
        
        { name: 'Basic Facial', details:'(Cleansing, exfoliation, massage, and mask)',  subImage:'./images/facial.png', price: 50  },
        { name: 'Deep Cleansing Facial', details:'(For acne-prone and oily skin)',  subImage:'./images/facial.png', price: 70 },
        { name: 'Anti-Aging Facial', details:'(Targeting wrinkles, fine lines, collagen boost)', subImage:'./images/facial.png', price: 90 },
        { name: 'Brightening Facial', details:'(For dull, tired skin, adds glow)', subImage:'./images/facial.png', price: 90 },
        {name: 'Gold Facial / Luxury Facial', details:'(Special treatments using gold, caviar, or diamond products)', subImage:'./images/facial.png', price: 110 },
        {name: 'Bridal Skin Care Package', details:'(Special treatments using gold, Cleansing, exfoliation, massage, and mask)', subImage:'./images/facial.png', price: 150 }
      ]
     } ,
    { name: 'Eyebrows Makeup' , image:'./images/Makeup artist-bro 1.png',
      
      subServices: [
        
        { name: 'Eyebrow Shaping', details:'(	Clean up brows with gentle waxing or precise threading for a natural look.)',  subImage:'./images/eyebrow.png', price: 50  },
        { name: 'Eyebrow Tinting', details:'(	Enhance brows with a semi-permanent tint that darkens hairs)',  subImage:'./images/eyebrow.png', price: 70 },
        { name: 'Eyebrow Lamination	', details:'(lift treatment that smooths)', subImage:'./images/eyebrow.png', price: 90 },
        { name: 'Eyebrow Microblading	', details:'(creates hair-like strokes for natural-looking fuller brows.)', subImage:'./images/eyebrow.png', price: 90 },
        {name: 'Eyebrow Bleaching	', details:'(Lightens brow hairs for a softer, more subtle look)', subImage:'./images/eyebrow.png', price: 110 },
        {name: 'Eyebrow Makeup', details:'(Professional eyebrow styling and makeup for weddings, parties, or photoshoots.)', subImage:'./images/eyebrow.png', price: 150 }
      ]
    } ,
    { name:'Massage' , image:'./images/Facial massage.png',
      subServices: [
        
        { name: 'Full Body Relaxation Massage', details:'(Light to medium pressure to reduce stress and promote relaxation)',  subImage:'./images/Massage1.png', price: 50  },
        { name: 'Deep Tissue Massage', details:'(Focused on deeper muscle layers to relieve tension and muscle pain)',  subImage:'./images/Massage1.png', price: 70 },
        { name: 'Swedish Massage', details:'(Gentle and soothing massage, perfect for beginners or stress relief)', subImage:'./images/Massage1.png', price: 90 },
        { name: 'Aromatherapy Massage', details:'(Relaxing massage using essential oils for enhanced mood and wellness)', subImage:'./images/Massage1.png', price: 90 },
        {name: 'Head, Neck & Shoulder Massage', details:'(Quick stress relief targeting common tension areas)', subImage:'./images/Massage1.png', price: 110 },
        {name: 'Hot Stone Massage', details:'(Heated stones used for deeper muscle relaxation and improved circulation)', subImage:'./images/Massage1.png', price: 100 }
      ]
    } ,
    { name:'Nails Services' , image:'./images/Manicurist.png'} ,
    { name:'Hair Services'  , image:'./images/Hairdresser.png' } ,
    { name: 'Eyelash Services', image:'./images/Eyes.png'} ,
    { name:'Facial Hair Removal' , image:'./images/Makeup artist.png'} ,
    { name: 'Makeup Services', image:'./images/Waterproof.png'} 


  ]

  goToSubServices(service: any) {
    const serviceName = service.name.toLowerCase().replace(/\s+/g, '-'); // "Skin Cares" -> "skin-cares"
    this.router.navigate(['/services', serviceName], { state: { service } });
  }
}