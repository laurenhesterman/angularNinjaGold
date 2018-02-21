import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
  { path: 'work',component: WorkComponent },
  { path: 'about',component: AboutComponent },
  { path: 'contact',component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: '/about' }

  // { path: '', pathMatch: 'full', redirectTo: '/seattle' },
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // { path: '**', component: '/PageNotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
