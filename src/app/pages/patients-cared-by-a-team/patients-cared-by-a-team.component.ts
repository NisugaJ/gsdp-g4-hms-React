import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'patients-cared-by--team',
  templateUrl: 'patients-cared-by-a-team.component.html',
  styleUrls: ['patients-cared-by-a-team.component.css'],
})
export class PatientsCaredByATeam {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Patients-cared-by-a-team - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Patients-cared-by-a-team - gsdp-g4-hms',
      },
    ])
  }
}
