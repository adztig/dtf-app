import { TeamsService } from '../teams.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.css']
})
export class TeamsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  private service: TeamsService) { }

  teams$;
  ngOnInit() {
    this.teams$ = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.service.getTeam(params.get('id')));
  }

}
