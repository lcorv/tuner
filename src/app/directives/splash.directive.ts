import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSplash]'
})
export class SplashDirective {

  constructor(
    private el : ElementRef
  ) { }
ngOnInit(){
  
}
}
