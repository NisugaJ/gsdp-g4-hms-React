import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Admission } from './admission.component'

const routes = [
  {
    path: '',
    component: Admission,
  },
]

@NgModule({
  declarations: [Admission],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Admission],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdmissionModule {}
