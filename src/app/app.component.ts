import { Component, OnInit } from '@angular/core'

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isVisible = true

  posts: Post[] = [
    {title: 'Хочу выучить Ангулар компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'будет про директивы и еще про пайпы', id: 2}
  ]

  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  obj = {
    a: 1, b: { c: 2}
  }
  img = 'https://aurosystem.com/uploads/services/service_5ca8feeb7c2b6.jpg'
  inputValue = ''
  constructor() {
     setTimeout(()=>{
       console.log('Timeout is over')
       this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
     }, 5000)
  }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log('Timeout:')
      this.posts[0].title = 'Changed!'
    }, 5000)
  }

  updatePosts(post: Post){
    this.posts.unshift(post)
    console.log('Post:', post)
  }

   onInput(event: KeyboardEvent){
     console.log('Event:', event)
     this.inputValue = (<HTMLInputElement>event.target).value
   }
  onBlur(str: string){
    this.inputValue = str
  }
   onClick(){
     console.log('Click')
   }

  removePost(id: number){
    console.log('Id to remove:', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
