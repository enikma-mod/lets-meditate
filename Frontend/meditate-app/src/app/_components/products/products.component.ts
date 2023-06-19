import { Component, OnInit } from '@angular/core';
import { Meditation } from '../../_interface/meditation';
import { MeditationsService } from 'src/app/_services/meditations.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  meditations: any;
  isLoading: boolean = true; // Add the isLoading property and set it to true initially
  constructor(public medService: MeditationsService) { }

  ngOnInit(){
    this.getMeditations();

     // Simulate data loading
     setTimeout(() => {
      this.isLoading = false; // Set isLoading to false once the data is loaded
    }, 2000);
  }

  getMeditations(): void {
    this.medService.getMeditations().subscribe({
      next: (data: any) => {
          this.meditations = data;
        },
        error: (err: any) => {
          
        }
  });
  }

  //using ngclass to change background color for each card
  cardBackgroundColors: string[] = ["#cde4f1", "#B9D9EB", "#B9D9EB", "#cde4f1"]; // Add more colors as desired
  // #D8BFD8" - pink
}