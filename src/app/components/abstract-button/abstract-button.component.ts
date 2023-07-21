import { Component, Input } from '@angular/core'

@Component({
  selector: 'abstract-button',
  templateUrl: 'abstract-button.component.html',
  styleUrls: ['abstract-button.component.css'],
})
export class AbstractButton {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Button'
  isVisible: boolean = false
  constructor() {}
}
