import { Component, OnInit } from '@angular/core';
import { Meditation } from '../../_interface/meditation';
import { MeditationService } from '../../_services/meditation.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  meditations: Meditation[] = [];

  // constructor(private meditationService: MeditationService) { }

  ngOnInit(): void {
    // this.getMeditations();
  }

  // getMeditations(): void {
  //   this.meditationService.getMeditations()
  //     .subscribe(
  //       data => {
  //         this.meditations = data;
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }
}
