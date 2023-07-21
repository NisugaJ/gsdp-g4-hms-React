import { Component, Input } from '@angular/core'

@Component({
  selector: 'side-nav-main-button',
  templateUrl: 'side-nav-main-button.component.html',
  styleUrls: ['side-nav-main-button.component.css'],
})
export class SideNavMainButton {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Button'
  isVisible: boolean = false
  constructor() {}
}
