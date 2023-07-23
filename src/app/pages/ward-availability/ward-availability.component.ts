import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'ward-availability',
  templateUrl: 'ward-availability.component.html',
  styleUrls: ['ward-availability.component.css'],
})
export class WardAvailability {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('WardAvailability - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WardAvailability - gsdp-g4-hms',
      },
    ])
  }
}
