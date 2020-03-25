import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post5',
  templateUrl: './post5.component.html',
  styleUrls: ['./post5.component.scss']
})
export class Post5Component implements OnInit {
   arr = [1, 1, 3, 5, 8, 13]

  objs =  [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
        {name: 'Max 2', text: 'lorem 4'},
        {name: 'Max 2', text: 'lorem 5'},
        {name: 'Max 2', text: 'lorem 6'},
      ]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
