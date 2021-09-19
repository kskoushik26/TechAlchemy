import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RetaurantserviceService } from '../service/retaurantservice.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  allRestaurant: any=[];
  detailRestaurant: any;
  resName: any=[];
  restaurants: any;
  currentRestaurant: any;

  constructor(private restaurantService:RetaurantserviceService,public router: Router) { }

  ngOnInit() {
     this.getAllRestaurant()
     this.getRestaurantDetails()
  }

  getAllRestaurant(){
    this.restaurantService.getAllResturant().subscribe((response)=>{
       this.allRestaurant=response;
       console.log(this.allRestaurant.allRestaurants)
       this.restaurants=this.allRestaurant.allRestaurants
      //  console.log(this.allRestaurant[0]['restaurantName'])
    })
  }
  getRestaurantDetails(){
    this.restaurantService.getAllResturant().subscribe((response1)=>{
       this.detailRestaurant=response1;
       console.log(this.detailRestaurant)
    })
  }
  Home(){
    this.router.navigate(['/home']);
  }



}
