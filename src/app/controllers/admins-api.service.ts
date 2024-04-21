import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Admins } from '../modules/admins';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminsApiService extends ApiFunctionService<Admins> {

  constructor(public override http:HttpClient) {
    super('http://localhost:3000/admin', http);
  }
}
