import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post6',
  templateUrl: './post6.component.html',
  styleUrls: ['./post6.component.scss']
})
export class Post6Component implements OnInit {

  now: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
