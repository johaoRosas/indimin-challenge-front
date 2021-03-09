import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { Cityzen } from '../models/cityzen.model';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CityzenService {
  cityzens: Cityzen[]=[];

  constructor(
    private http: HttpClient) {
  }

  
  getCityzen(): Observable<Cityzen[]> {
    return this.http.get<Cityzen[]>(environment.service.cityzen)
      .pipe(
        tap(hits => console.log('fetched cityzen')),
        catchError(this.handleError('getCityzen', []))
      );
  }

  getCityzenStorageById(id:number) { 
    let cityzen : Cityzen = {
      id : 0,
      email:'',
      firstName: '',
      lastName : '', 
      status : false,
    }
    if(localStorage.getItem('cityzens') === null) {

      
    } else {
      this.cityzens = JSON.parse(localStorage.getItem('cityzens')|| '{}');
      
      let cityzenResult =  this.cityzens.find(x=> x.id == id)

        if (cityzenResult) {
          return cityzen={
            id : cityzenResult.id,
            email:cityzenResult.email,
            firstName: cityzenResult.firstName,
            lastName : cityzenResult.lastName, 
            status : false,
          }
          }
        } 

        return cityzen;
 
  }

  setAgencyStorage(cityzens: Cityzen[]) {
    if(cityzens.length>0 ) {
      localStorage.setItem('cityzens', JSON.stringify(cityzens));
    }  
  }
 
  addCityzen(cityzen : Cityzen): Observable<any> {
 
    return this.http.post(environment.service.cityzen, cityzen, httpOptions).pipe(
      tap(_ => console.log(`add cityzen `)),
      catchError(this.handleError<any>('addCityzen'))
    );
  }

  addCityzenStorage(agency: Cityzen) {
    this.cityzens.push(agency);
    let cityzens = [];
    if(localStorage.getItem('cityzens') === null) {
      cityzens = [];
      cityzens.push(agency);
      localStorage.setItem('cityzens', JSON.stringify(cityzens));
    } else {
      cityzens = JSON.parse(localStorage.getItem('cityzens')|| '{}');
      cityzens.push(agency); 
      localStorage.setItem('cityzens', JSON.stringify(cityzens));
    }
  }
 

  updateCityzen(id : number,cityzen : Cityzen): Observable<any> {
    return this.http.put(environment.service.cityzen + id, cityzen, httpOptions).pipe(
      tap(_ => console.log(`updated hit id=${id}`)),
      catchError(this.handleError<any>('updateHit'))
    );
  }

  deleteCityzen(id : number): Observable<any> {
    return this.http.delete(environment.service.cityzen +'?Id='+ id).pipe(
      tap(_ => console.log(`updated hit id=${id}`)),
      catchError(this.handleError<any>('updateHit'))
    );
  }
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
