import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ActivityLog } from './activity-log.component'

const routes = [
  {
    path: '',
    component: ActivityLog,
  },
]

@NgModule({
  declarations: [ActivityLog],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ActivityLog],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivityLogModule {}
