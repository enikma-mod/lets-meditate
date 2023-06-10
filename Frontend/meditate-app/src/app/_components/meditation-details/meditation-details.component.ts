import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meditation } from 'src/app/_interface/meditation';
import { MeditationsService } from 'src/app/_services/meditations.service';



@Component({
  selector: 'app-meditation-details',
  templateUrl: './meditation-details.component.html',
  styleUrls: ['./meditation-details.component.scss']
})
export class MeditationDetailsComponent implements OnInit, OnDestroy {
  
  meditations: any;
  timerRunning: boolean = false;
  minutes: number = 0;
  seconds: number = 0;
  private timer: any;

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

  startTimer() {
    this.timerRunning = true;
    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }
    }, 1000);
  }

  stopTimer() {
    this.timerRunning = false;
    clearInterval(this.timer);
    alert(`You meditated for ${this.minutes} minutes.`);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
  

}
  

 
