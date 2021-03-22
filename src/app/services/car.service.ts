import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl="https://localhost:44398/api/";


  constructor(private httpClient:HttpClient) { }


  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  
    

}
