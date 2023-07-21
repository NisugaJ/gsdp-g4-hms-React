import { Component, Input } from '@angular/core'

@Component({
  selector: 'side-nav-sub-button',
  templateUrl: 'side-nav-sub-button.component.html',
  styleUrls: ['side-nav-sub-button.component.css'],
})
export class SideNavSubButton {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Button'
  isVisible: boolean = false
  constructor() {}
}
