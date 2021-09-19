import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetaurantserviceService {
  restaurantDetails: any;

  constructor(private http: HttpClient) { }

  setrestaurantData(data){
    this.restaurantDetails=data
  }
  getrestaurantData(){
    return this.restaurantDetails
  }


  getAllResturant():Observable<any>{
    return this.http.get(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants`)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }
  getRestaurantDetail():Observable<any>{
    return this.http.get(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails`)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }
  getMenu():Observable<any>{
    return this.http.get(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu`)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )         
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
