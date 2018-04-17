import { Team } from '../model/team';
import { TeamsService } from './teams.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  settings = {
    actions: {
      position: 'hidden'
    },
    hideSubHeader: true,
    columns: {
      shortName: {
        title: 'ID'
      },
      city: {
        title: 'City'
      },
      name: {
        title: 'Name'
      },
      logo: {
        title: 'Logo',
        type: 'html',
        valuePrepareFunction: (logo) => {return `<img src='${logo}' width="50" height="50">`}
      }
    },
    attr: {
      class: 'table table-bordered table-hover table-condensed'
    }
  };
  
  teams: Team[];
  teams$: Observable<Team[]>;
  
  datasource: LocalDataSource;
  
  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
     this.teams = data;
      this.datasource = new LocalDataSource(data);
    });
  }

}
