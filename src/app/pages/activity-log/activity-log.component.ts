import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'activity-log',
  templateUrl: 'activity-log.component.html',
  styleUrls: ['activity-log.component.css'],
})
export class ActivityLog {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ActivityLog - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ActivityLog - gsdp-g4-hms',
      },
    ])
  }
}
