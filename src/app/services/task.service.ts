import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/moc.task';
import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks"
  constructor(private http:HttpClient) { }
  taskservice():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deletetask(task:any):Observable<any>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<any>(url)
  }

  updateTaskReminder(task:any):Observable<any>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<any>(url, task, httpoptions)
  }

  addtask(task:any):Observable<any>{
    return this.http.post<any>(this.apiUrl, task, httpoptions)
  }
}
