import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:RentalDetailDto[]=[];

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalsDetail();
  }
  getRentalsDetail(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentals=response.data});
  
  }
    
}
