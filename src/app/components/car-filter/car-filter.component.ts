  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  colors:Color[];
  cars:Car[];
  brands:Brand[];
  currentBrand:Brand;
  currentColor:Color;

  constructor(private colorService:ColorService,private brandService:BrandService,private carService:CarService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors=response.data;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands=response.data;
    })
  }
  

  IsCurrentColorNull(){
    if(!this.currentColor){
      return true;
    }else{
      return false;
    }
  }

  getCurrentBrand(brand:Brand){
    if(this.currentBrand.id==brand.id){
      return true;
    }else{
      return false;
    }
  }

  getCurrentColor(color:Color){
    if(color.id==this.currentColor.id){
      return true;
    }else{
      return false;
    }
  }

  getRouterLink()
  {
    if(this.currentColor&&this.currentBrand){
      if(this.currentColor.id==undefined)
      {
        return "cars/brand/"+this.currentBrand.id
      }else if (this.currentBrand.id==undefined)
      {
        return "cars/color/"+this.currentColor.id;
      }else{
        return "cars/brand/"+this.currentBrand.id+"/color/"+this.currentColor.id
      } 
    }
    else if(this.currentBrand){
      return "cars/brand/"+this.currentBrand.id;
    }
    else if(this.currentColor){
      return "cars/color/"+this.currentColor.id;
    }
    else{
      return "cars/"
    }
  }
}