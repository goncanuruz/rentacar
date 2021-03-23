import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/carDetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:CarDetailDto[];
  carImages:CarImage[];
  urlPath:string="https://localhost:44329/CarImages/"
  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
  }
  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarImages(){
    this.carDetailService.getCarImages().subscribe(response=>{
      this.carImages=response.data
    })
  }
}
