import {Component} from '@angular/core'

@Component({
  selector:  'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  title = 'initial'


  onInput(event: any){
     this.title = event.target.value
  }

}
