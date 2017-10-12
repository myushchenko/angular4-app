import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: PersonalDetailComponent
    },
    {
        path: 'hello',
        component: HelloComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
