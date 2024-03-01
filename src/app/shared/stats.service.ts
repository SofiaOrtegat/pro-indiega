import { Injectable } from '@angular/core';
import { STATS } from '../mock-db/mock-stats';
import { Features } from './stats.model';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  // tslint:disable-next-line:array-