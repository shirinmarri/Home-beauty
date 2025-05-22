import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOptions: string[] = ['services', 'about us', 'contact us', 'Blogs'];
   doSomething(text:string){
    console.log(text);
    
   }
}
