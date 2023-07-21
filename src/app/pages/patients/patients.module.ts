import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { Patients } from './patients.component'

const routes = [
  {
    path: '',
    component: Patients,
  },
]

@NgModule({
  declarations: [Patients],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Patients],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PatientsModule {}
