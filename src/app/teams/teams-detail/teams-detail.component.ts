import { Team } from '../../model/team';
import { TeamsService } from '../teams.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.css']
})
export class TeamsDetailComponent implements OnInit {

  settings = {
    actions: {
      position: 'hidden'
    },
    hideSubHeader: true,
    columns: {
      image: {
        title: '',
        type: 'html',
        valuePrepareFunction: (data) => {return `<img src='${data}' width="50" height="50">`}
      },
      position: {
        title: 'Pos'
      },
      number: {
        title: '#'
      },
      name: {
        title: 'Name'
      }
    },
    attr: {
      class: 'table table-bordered table-hover table-condensed'
    }
  };
  
  datasource: LocalDataSource;
  
  constructor(private route: ActivatedRoute,
  private router: Router,
  private service: TeamsService) { }

  teamId;
  
  team$;
  ngOnInit() {
    this.route.paramMap
    .subscribe((params) =>
      this.teamId = params.get('teamid'));
    
    
    console.debug(this.teamId);
    
    this.service.teams$.subscribe(team =>{
      this.team$ = team.filter(data => data.shortName == this.teamId)[0];
      
      this.datasource = new LocalDataSource(new Array(this.team$.players));
      console.debug("Players: ", this.team$.players);
      console.debug("Source: ", this.datasource);
    });
//    this.route.data
//      .subscribe((data: { team: Team }) => {
//        this.team$ = data.team;
//      });
  }

}
