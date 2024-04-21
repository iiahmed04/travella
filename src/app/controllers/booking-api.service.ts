import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Booking } from '../modules/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingApiService extends ApiFunctionService<Booking> {

  constructor(public override http:HttpClient) {
    super('http://localhost:3000/booking',http);
  }
}
