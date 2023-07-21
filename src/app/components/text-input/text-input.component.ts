import { Component, Input } from '@angular/core'

@Component({
  selector: 'text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.css'],
})
export class TextInput {
  @Input()
  rootClassName: string = ''
  @Input()
  textinput_placeholder1: string = ''
  constructor() {}
}
