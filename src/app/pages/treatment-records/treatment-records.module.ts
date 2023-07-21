import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { TreatmentRecords } from './treatment-records.component'

const routes = [
  {
    path: '',
    component: TreatmentRecords,
  },
]

@NgModule({
  declarations: [TreatmentRecords],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [TreatmentRecords],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TreatmentRecordsModule {}
