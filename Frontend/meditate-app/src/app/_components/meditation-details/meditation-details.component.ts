import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meditation } from 'src/app/_interface/meditation';
import { MeditationsService } from 'src/app/_services/meditations.service';



@Component({
  selector: 'app-meditation-details',
  templateUrl: './meditation-details.component.html',
  styleUrls: ['./meditation-details.component.scss']
})
export class MeditationDetailsComponent implements OnInit {
  
  meditations: any;

 

  constructor (private route: ActivatedRoute, private meditationsService: MeditationsService
  ) { }
  
  ngOnInit() {
    this.getMeditationDetails();


  }

  getMeditationDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const meditationId = +id; // Convert id to a number
      this.meditationsService.getMeditation(meditationId)
        .subscribe(
          (data: Meditation) => {
            this.meditations = data;
            this.meditations.loadSound();
          },
          (error: any) => {
            console.error(error);
          }
        );
    }
  }
}