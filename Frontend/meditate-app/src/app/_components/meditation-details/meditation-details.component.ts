import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meditation } from 'src/app/_interface/meditation';
import { MeditationsService } from 'src/app/_services/meditations.service';
import { Howl } from 'howler';



@Component({
  selector: 'app-meditation-details',
  templateUrl: './meditation-details.component.html',
  styleUrls: ['./meditation-details.component.scss']
})
export class MeditationDetailsComponent implements OnInit {
  
  meditations: any;
  timer: any;
  isTimerRunning: boolean = false;

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
  

  loadSound() {
    this.meditations.soundFile = new Howl({
      src: [this.meditations.sounds],
      html5: true
    });
  }

  startTimer() {
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timer = setInterval(() => {
        // Timer logic goes here
      }, 1000);
    }
  }

  stopTimer() {
    if (this.isTimerRunning) {
      clearInterval(this.timer);
      this.isTimerRunning = false;
    }
  }

  playSound() {
    if (this.meditations.soundFile) {
      this.meditations.soundFile.play();
    }
  }
  
  stopSound() {
    if (this.meditations.soundFile) {
      this.meditations.soundFile.stop();
    }
  }

 
  
  

}
