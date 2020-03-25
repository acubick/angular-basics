import {
  Directive, ElementRef, HostListener, Input, Renderer2
} from '@angular/core'

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {



  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight: string = 'light'
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string }

      constructor(private el: ElementRef, private r: Renderer2) {
        console.log('El:', this.el)
        this.el.nativeElement.style.color = 'red'
        // this.r.setStyle(this.el.nativeElement, 'background', 'green')
      }

  @HostListener('click', ['$event.target']) onClick(event: Event){
    console.log('Event:', event)
  }

  @HostListener('mouseenter') onEnter(){
    // this.r.setStyle(this.el.nativeElement, 'background', this.color)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }
  @HostListener('mouseleave') onLeave(){
    // this.r.setStyle(this.el.nativeElement, 'background', null)
    // this.r.setStyle(this.el.nativeElement, 'background', 'green')
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
  }

}
