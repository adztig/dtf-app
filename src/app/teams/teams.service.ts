import { ApiOutput } from '../model/apiOutput';
import { Team } from '../model/team';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

  getTeams():Observable<Team[]>{
    return this.httpClient.get<ApiOutput>('https://nba-dtf-2018.herokuapp.com/api/teams')
      .pipe(map(data => data.data));
  }
  
  getTeam(id: string):Observable<Team>{
    return this.httpClient.get<Team>('https://nba-dtf-2018.herokuapp.com/api/teams');
  }
  
}
