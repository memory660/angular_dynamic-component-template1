import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHash]',
})
export class HashDirective {
  @Input() appHash!: string;

  constructor(public vcRef: ViewContainerRef) {}
}
