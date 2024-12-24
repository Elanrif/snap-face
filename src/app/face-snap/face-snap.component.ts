import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
    count!: number ;
    message!: string;
    title!: string;
    description!: string;
    createdAt!: Date;
    snaps!: number;
    imageUrl!: string;

    ngOnInit(): void {
         this.count = 0;
         this.message = '';
         this.title = 'Archibald';
         this.description = 'Mon meilleur ami depuis toujours !';
         this.createdAt = new Date()
         this.snaps = 5;
         this.imageUrl =
           'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    }

    onAddSnap() {
      if(this.count < 1){
      this.snaps++;
      this.count++;
    }else{
      this.message = 'Oops un Snap!';
    }
  }
}
