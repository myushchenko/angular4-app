import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
    {
        path: '',
        component: PersonalDetailComponent
    },
    {
        path: 'hello',
        component: HelloComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
