import { Component, Input } from '@angular/core'

@Component({
  selector: 'side-nav-sub-section-title',
  templateUrl: 'side-nav-sub-section-title.component.html',
  styleUrls: ['side-nav-sub-section-title.component.css'],
})
export class SideNavSubSectionTitle {
  @Input()
  text: string = 'Text'
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Button'
  @Input()
  text1: string = 'Text'
  @Input()
  button1: string = 'Button'
  isSelected: boolean = false
  isVisible: boolean = false
  constructor() {}
}
