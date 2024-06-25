import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PersonModel } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url:string=environment.url;
  private httpHeaders:HttpHeaders=new HttpHeaders();
  private nameResource:string = 'persons'

  constructor(private httpClient:HttpClient) {
    this.httpHeaders = this.httpHeaders
    .set("Authorization","Beaver jwt")
    .set("Content-Type","application/json");
  }

  public getAll():Observable<PersonModel[]>{
    console.log("calling all()");
    return this.httpClient.get<PersonModel[]>(`${this.url}/${this.nameResource}`,{headers:this.httpHeaders});
  }

  public get(id:number):Observable<PersonModel>{
    return this.httpClient.get<PersonModel>(`${this.url}/${this.nameResource}/${id}`);
  }

  public add(personEntity:PersonModel):Observable<PersonModel>{
    return this.httpClient.post<PersonModel>(`${this.url}/${this.nameResource}`,personEntity);
  }

  public update(personModel:PersonModel):Observable<PersonModel>{
    return this.httpClient.put<PersonModel>(`${this.url}/${this.nameResource}/${personModel.id}`,personModel);
  }

  public delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.url}/${this.nameResource}/${id}`);
  }

}
