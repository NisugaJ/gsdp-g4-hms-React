import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-wards',
  templateUrl: 'wards.component.html',
  styleUrls: ['wards.component.css'],
})
export class Wards {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Wards - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Wards - gsdp-g4-hms',
      },
    ])
  }
}
