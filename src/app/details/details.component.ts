import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetaurantserviceService } from '../service/retaurantservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentRestaurant: any;
  menuDetail: any=[];
  menuDetails: any;

  constructor(private restaurantService:RetaurantserviceService,public router: Router) { }

  ngOnInit() {
    this.currentRestaurant=this.restaurantService.getrestaurantData();
    console.log("data in workflow info component  ",this.currentRestaurant);
    this.getAllMenu()
  }

  getAllMenu(){
    this.restaurantService.getMenu().subscribe((response)=>{
      this.menuDetail=response
    this.menuDetails=this.menuDetail.menu
    console.log(this.menuDetails)
    })
  }
  home(){
    this.router.navigate(['/home']);
  }

}
