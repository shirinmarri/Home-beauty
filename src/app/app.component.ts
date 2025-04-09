import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent} from './components/hero-section/hero-section.component';
import { ServicesContainerComponent } from './components/services-container/services-container.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SelectedStaffesComponent} from './components/selected-staffes/selected-staffes.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TestimonialsComponent} from './components/testimonials/testimonials.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent , ServicesContainerComponent , AboutUsComponent , SelectedStaffesComponent , BlogsComponent , TestimonialsComponent] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-1';
  text="enter what you like"
  changeText(event:any){
    this.text=event.target.value;

  }
}
