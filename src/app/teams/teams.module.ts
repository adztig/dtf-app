import { TeamsDetailComponent } from './teams-detail/teams-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsService } from './teams.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    TeamsRoutingModule
  ],
  declarations: [TeamsComponent, TeamsDetailComponent],
  providers: [TeamsService]
})
export class TeamsModule { }
