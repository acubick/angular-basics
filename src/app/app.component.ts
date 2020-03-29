import {
  animate, group, keyframes, query, sequence, state, style, transition, trigger
} from '@angular/animations'
import { Component } from '@angular/core'
import { boxAnimations } from './app.animations'

@Component( {
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   [ './app.component.css' ],
  animations:  [boxAnimations]
} )
export class AppComponent {
  boxState = 'start'
  visible  = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  animationStarted(event: AnimationEvent) {
    console.log('animationStarted', event )
  }

  animationDone(event: AnimationEvent) {
    console.log('animationDone', event )
  }
}
