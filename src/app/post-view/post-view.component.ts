import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef,
  EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core'
import { Post } from '../app.component'

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'] ,
  changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush  //Только при изменении ссылки на объект, и только на входные параметры
  encapsulation: ViewEncapsulation.None
})
export class PostViewComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked ,
  OnDestroy
{

  // @Input('myPost') post: Post
  @Input() post: Post
  @ContentChild('info', {static: true}) infoRef: ElementRef
   @Output() onRemove = new EventEmitter<number>()
  constructor() {
    console.log( 'constructor' )
  }

  removePost(){
      this.onRemove.emit(this.post.id)
  }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes)
  }

  ngOnInit(): void  {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement )
  }
  ngDoCheck(): void{
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()')
  }
}
