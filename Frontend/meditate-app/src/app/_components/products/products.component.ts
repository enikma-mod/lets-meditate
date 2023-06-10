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

  constructor(public medService: MeditationsService) { }

  ngOnInit(){
    this.getMeditations();
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
  cardBackgroundColors: string[] = ["#D8BFD8", "#B9D9EB", "#ACE1AF", "#F0E68C"]; // Add more colors as desired
  
}