import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';//optional
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
	// imports: [NgbCarouselModule ],
  
})
export class HomeComponent {
  
  constructor(
   
    private router: Router) { 
      
    }
  goToEmployeeList(){
    this.router.navigate(['/show-all-employees']);
  }
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/600`);

}



