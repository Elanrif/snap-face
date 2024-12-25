import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/FaceSnap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent{
  @Input() faceSnaps!: FaceSnap[];

  snapButtonText!: string;
  userHasSnapped = false;

  ngOnInit(): void {
      this.snapButtonText = 'Oh Snap!';
  }
 /*  addSnap() {
    if(this.userHasSnapped){
      this.unSnap();
      this.userHasSnapped = false;
    }else{
      this.snap();
      this.userHasSnapped = true;
    }
  } */
/*   unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  } */
}
