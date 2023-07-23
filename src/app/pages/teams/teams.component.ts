import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css'],
})
export class Teams {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Teams - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Teams - gsdp-g4-hms',
      },
    ])
  }
}
