import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { RegisterDoctor } from './register-doctor.component'

const routes = [
  {
    path: '',
    component: RegisterDoctor,
  },
]

@NgModule({
  declarations: [RegisterDoctor],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [RegisterDoctor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterDoctorModule {}
