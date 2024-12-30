import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/FaceSnap';
import {DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { SnapType } from '../models/snap-type.type';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgClass,NgStyle, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped = false;

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void {
      this.snapButtonText = 'Oh Snap!';
  }
  addSnap() {
    if(this.userHasSnapped){
      this.unSnap();
      this.userHasSnapped = false;
    }else{
      this.snap();
      this.userHasSnapped = true;
    }
  }
  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

}
