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
      date: "Text 