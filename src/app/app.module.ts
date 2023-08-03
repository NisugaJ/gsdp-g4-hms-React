import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ComponentsModule } from './components/components.module';

export const routes = [
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
    path: 'ward-availability',
    loadChildren: () =>
      import('./pages/ward-availability/ward-availability.module').then(
        (m) => m.WardAvailabilityModule
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
    path: 'ward-types',
    loadChildren: () =>
      import('./pages/ward-types/ward-types.module').then(
        (m) => m.WardTypesModule
      ),
  },
  {
    path: 'register-doctor',
    loadChildren: () =>
      import('./pages/register-doctor/register-doctor.module').then(
        (m) => m.RegisterDoctorModule
      ),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'patients-cared-by-a-team',
    loadChildren: () =>
      import(
        './pages/patients-cared-by-a-team/patients-cared-by-a-team.module'
      ).then((m) => m.PatientsCaredByATeamModule),
  },
  {
    path: 'activity-log',
    loadChildren: () =>
      import('./pages/activity-log/activity-log.module').then(
        (m) => m.ActivityLogModule
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
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
