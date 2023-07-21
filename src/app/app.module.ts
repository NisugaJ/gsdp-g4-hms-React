import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'wards',
    loadChildren: () =>
      import('./pages/wards/wards.module').then((m) => m.WardsModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./pages/patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'admit-or-transfer',
    loadChildren: () =>
      import('./pages/admit-or-transfer/admit-or-transfer.module').then(
        (m) => m.AdmitOrTransferModule
      ),
  },
  {
    path: 'discharge',
    loadChildren: () =>
      import('./pages/discharge/discharge.module').then(
        (m) => m.DischargeModule
      ),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      ),
  },
  {
    path: 'admission',
    loadChildren: () =>
      import('./pages/admission/admission.module').then(
        (m) => m.AdmissionModule
      ),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./pages/doctors/doctors.module').then((m) => m.DoctorsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'treatment-records',
    loadChildren: () =>
      import('./pages/treatment-records/treatment-records.module').then(
        (m) => m.TreatmentRecordsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register-doctor',
    loadChildren: () =>
      import('./pages/register-doctor/register-doctor.module').then(
        (m) => m.RegisterDoctorModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
