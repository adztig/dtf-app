import { Player } from './player';

export class Team {
  id?: string;
  shortName?: string;
  name?: string;
  city?: string;
  logo?: string;
  createdAt?: string;
  updatedAt?: string;
  players?: Player[];
}