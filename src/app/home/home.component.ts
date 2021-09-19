import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetaurantserviceService } from '../service/retaurantservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRestaurant: any=[];
  detailRestaurant: any;
  resName: any=[];
  restaurants: any;
  currentRestaurant: any;
  openFlag: boolean=false;

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
      this.restaurants.forEach(t=>{
        if(t.isOpen =true){
          this.openFlag=true
          console.log(this.openFlag)
        }
      })
    })
  }
  getRestaurantDetails(){
    this.restaurantService.getAllResturant().subscribe((response1)=>{
       this.detailRestaurant=response1;
       console.log(this.detailRestaurant)
    })
  }
  detailsPage(res){
    console.log("data",res)
    this.currentRestaurant=res;
    console.log(this.currentRestaurant)
    this.restaurantService.setrestaurantData(this.currentRestaurant)
    this.router.navigate(['/details'])
  }

}
