import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform{
  public transform(num: number, pow: number = 2): number {

    return num * pow

  }

}
