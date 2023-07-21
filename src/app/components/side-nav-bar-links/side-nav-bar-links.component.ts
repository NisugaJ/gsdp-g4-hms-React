import { Component, Input } from '@angular/core'

@Component({
  selector: 'side-nav-bar-links',
  templateUrl: 'side-nav-bar-links.component.html',
  styleUrls: ['side-nav-bar-links.component.css'],
})
export class SideNavBarLinks {
  @Input()
  rootClassName1: string = ''
  @Input()
  button: string = 'Dashboard'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
