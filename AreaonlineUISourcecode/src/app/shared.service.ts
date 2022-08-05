import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5001/api"
  readonly PhontoUrl = "http://localhost:5001/Photos"
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/department',val)
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/department',val)
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/department',val)
  }
}
