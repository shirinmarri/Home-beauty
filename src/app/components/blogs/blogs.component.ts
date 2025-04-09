import { Component } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-blogs',
  imports: [BlogComponent ,CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  listOfBlogs = [
    {Title:'Benefits of Collagen Masks' , imageUrl:'./images/mask.png'},
    {Title:'The Mental Health Benefits of Massage' , imageUrl:'./images/massage.png'},
    {Title:'Is Nail Extension Harmful?' , imageUrl:'./images/nail.png'},
    {Title:'The Latest Hair Coloring Techniques' , imageUrl:'./images/hair-dye.png'}

  ]
}
