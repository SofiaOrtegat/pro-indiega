import { Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.sass"]
})
export class UpcomingComponent {
  tiles = [
    {
      title: "Title Sample #1",
      date: "Text Sample #1",
      image: "assets/images/game-img-1.jpg"
    },
    {
      title: "Title Sample #2",
      date: "Text Sample #2",
      image: "assets/images/game-img-2.jpg"
    },
    {
      title: "