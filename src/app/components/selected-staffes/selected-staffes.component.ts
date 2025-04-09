import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-selected-staffes',
  imports: [CommonModule],
  templateUrl: './selected-staffes.component.html',
  styleUrl: './selected-staffes.component.css'
})
export class SelectedStaffesComponent {
  staffs = [
    {name:"Mino Saleh",
      image:"./images/Mino.png",
      expert:"Nail Artist",
      stars:4 

    },
    {name:"Neda Panah",
      image:"./images/Neda.png",
      expert:"Makeup Artist",
      stars:5 

    },
    {name:"Sahar Azizi",
      image:"./images/Sahar.png",
      expert:"Hair Stylist",
      stars:5 

    },
    {name:"Sara Rashed",
      image:"./images/Sara.png",
      expert:"Hair Dresser",
      stars:4 

    }
  ];

}
