import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'ward-types',
  templateUrl: 'ward-types.component.html',
  styleUrls: ['ward-types.component.css'],
})
export class WardTypes {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('WardTypes - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WardTypes - gsdp-g4-hms',
      },
    ])
  }
}
