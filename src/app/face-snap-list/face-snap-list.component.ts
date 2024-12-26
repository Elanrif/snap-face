import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/FaceSnap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  //Dependency Ijection with constructor
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    this.faceSnaps[1].setLocation('à la montagne');
  }
}
