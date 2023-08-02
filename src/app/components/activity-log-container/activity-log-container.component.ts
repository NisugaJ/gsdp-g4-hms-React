import { Component, Input } from '@angular/core'

@Component({
  selector: 'activity-log-container',
  templateUrl: 'activity-log-container.component.html',
  styleUrls: ['activity-log-container.component.css'],
})
export class ActivityLogContainer {
  @Input()
  image_src: string = '/assets/dummy-profile-icon-200h.png'
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
