import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { PatientsCaredByATeam } from './patients-cared-by-a-team.component'

const routes = [
  {
    path: '',
    component: PatientsCaredByATeam,
  },
]

@NgModule({
  declarations: [PatientsCaredByATeam],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [PatientsCaredByATeam],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PatientsCaredByATeamModule {}
