import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Subject } from 'rxjs'
import {map, filter, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-rx-techno',
  templateUrl: './rx-techno.component.html',
  styleUrls: ['./rx-techno.component.scss']
})
export class RxTechnoComponent implements OnInit {

  sub: Subscription

  streamSub$: Subject<number> = new Subject<number>()
  counter = 0
  constructor() {

   this.sub =  this.streamSub$.subscribe( value => {
      console.log('Subscribe: ', value)
    })

   // const intervalStream$ =  interval(1000)
   // this.sub = intervalStream$
   //   .pipe(
   //     filter(value => value % 2 === 0),
   //     map(value => `Mapped value ${value}`),
   //     switchMap(() => interval(500))
   //   )
   //   .subscribe((value)=>{
   //    console.log('value:', value )
   //  })

    const stream$ = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1)
      } , 1500)

      setTimeout(()=>{
        observer.complete()
      } , 1900)


      setTimeout(()=>{
        observer.next(2 )
      } , 2500)
    })
    this.sub = stream$
      .subscribe(
        value =>  console.log('Next: ',value),
       error =>  console.log('Error: ', error),
        ()=> console.log('Complete')
    )
  }

  ngOnInit(): void {
  }
  stop(){
     this.sub.unsubscribe()
  }

  next() {
    this.streamSub$.next(this.counter++)
  }
}
