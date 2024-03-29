import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { WorkComponent } from './content/work/work.component'

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'work', component: WorkComponent },
  { path:'', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
