import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { Trips } from '../modules/trips';

@Injectable({
  providedIn: 'root'
})
export class TripsApiService extends ApiFunctionService<Trips> {

  constructor(public override http:HttpClient) {
    super("http://localhost:3000/trips",http);
  }
}
