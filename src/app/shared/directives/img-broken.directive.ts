import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;

    if (this.customImg) {
      elNative.src = this.customImg;
    } else {
      elNative.src = 'https://lastfm.freetls.fastly.net/i/u/500x500/b034911aefd0bcfa9044b603076c8753.jpg'
    }
  }
  constructor(private elHost: ElementRef) {

  }

}
