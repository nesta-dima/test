import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appWriteTextLetter]',
})
export class WriteTextLetterDirective {
  @Input('appGetValue') value = '';
  counter = 0;
  constructor(private el: ElementRef) {
    this.run();
  }

  private runWriteTextLetter() {
    if (!this.value.length) return;
    if (this.counter < this.value.length) {
      this.el.nativeElement.innerHTML += this.value[this.counter];
      this.counter++;
    }
  }

  private run() {
    this.applyStyle();

    const timer = setInterval(() => {
      if (this.counter >= this.value.length) {
        clearInterval(timer);
      }

      this.runWriteTextLetter();
      this.el.nativeElement.style.opacity = '1';
    }, 300);
  }

  private applyStyle() {
    this.el.nativeElement.innerHTML = '';
    this.el.nativeElement.style.opacity = '0';
  }
}
