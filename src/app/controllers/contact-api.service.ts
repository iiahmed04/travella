import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Contact } from '../modules/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService extends ApiFunctionService<Contact> {

  constructor(public override http:HttpClient) {
    super('http://localhost:3000/contact',http)
  }
}
