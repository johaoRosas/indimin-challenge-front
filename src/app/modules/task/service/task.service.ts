import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { Task } from '../models/task.model';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  cityzens: Task[]=[];

  constructor(
    private http: HttpClient) {
  }

  
  getTasksByCityzen(id : number): Observable<Task[]> {
    return this.http.get<Task[]>(environment.service.task  +'/detail?id='+id )
      .pipe(
        tap(hits => console.log('fetched Task')),
        catchError(this.handleError('Task', []))
      );
  }

  addTask(task : Task): Observable<any> {
 
    return this.http.post(environment.service.task, task, httpOptions).pipe(
      tap(_ => console.log(`add Task `)),
      catchError(this.handleError<any>('Task '))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
