import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { Doctors } from './doctors.component'

const routes = [
  {
    path: '',
    component: Doctors,
  },
]

@NgModule({
  declarations: [Doctors],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Doctors],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorsModule {}
