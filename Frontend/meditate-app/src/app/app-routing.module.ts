import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditationsComponent } from './_components/meditations/meditations.component';
import { HomepageComponent } from './_components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'medis', component: MeditationsComponent},
  {path: 'home', component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
