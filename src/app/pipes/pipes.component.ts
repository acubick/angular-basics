import { Component, OnInit } from '@angular/core'

interface Post {
  title: string,
  text: string
}

@Component( {
  selector:    'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls:   [ './pipes.component.scss' ]
} )
export class PipesComponent implements OnInit {



  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'JavaScript', text: 'The best language in the world'}
  ]

  search = ''
  searchField = 'title'

  e: number  = Math.E
  str        = 'hello world'
  date: Date = new Date()
  float      = 0.42
  obj        = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  constructor() { }

  ngOnInit(): void {

  }
  addPost(){
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Vladilen Angular 8 course'
    })
  }

}
