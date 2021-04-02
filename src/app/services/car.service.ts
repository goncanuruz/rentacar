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


  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByFilter(brandId:number,colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbyfilter?brandId="+(brandId)+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  
    

}
