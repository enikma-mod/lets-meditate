import { Component, OnInit } from '@angular/core';
import {Meditation} from '../../_interface/meditation';
import {MeditationService} from '../../_services/meditation.service'

@Component({
  selector: 'app-meditations',
  templateUrl: './meditations.component.html',
  styleUrls: ['./meditations.component.css']
})
export class MeditationsComponent implements OnInit {
  meditations: Meditation[] = []; 

  constructor(private meditationService: MeditationService) { }

  ngOnInit() {
    this.getMeditations();
  }

  getMeditations(): void {
    this.meditationService.getMeditations()
      .subscribe(
        data => {
          this.meditations = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}
