import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-discharge',
  templateUrl: 'discharge.component.html',
  styleUrls: ['discharge.component.css'],
})
export class Discharge {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Discharge - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Discharge - gsdp-g4-hms',
      },
    ])
  }
}
