import { TeamsDetailComponent } from './teams-detail/teams-detail.component';
import { TeamsComponent } from './teams.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:id', component: TeamsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
