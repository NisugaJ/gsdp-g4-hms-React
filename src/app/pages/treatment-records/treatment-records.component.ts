import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'treatment-records',
  templateUrl: 'treatment-records.component.html',
  styleUrls: ['treatment-records.component.css'],
})
export class TreatmentRecords {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('TreatmentRecords - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'TreatmentRecords - gsdp-g4-hms',
      },
    ])
  }
}
