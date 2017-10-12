import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatTabsModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}