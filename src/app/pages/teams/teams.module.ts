import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { Teams } from './teams.component'

const routes = [
  {
    path: '',
    component: Teams,
  },
]

@NgModule({
  declarations: [Teams],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Teams],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamsModule {}
