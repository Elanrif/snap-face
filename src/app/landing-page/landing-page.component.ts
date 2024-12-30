import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  snapFaceImg!: string;
  alt!: string;

  ngOnInit() {
    this.snapFaceImg = '/snapface.png';
    this.alt = 'Image doesn\'t exist' ;
  }
}
