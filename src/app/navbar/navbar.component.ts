import { Component } from "@angular/core";

import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { AuthenticationService } from "../Services/authentication.service";
import { User} from '../_models';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: [NgbDropdownConfig],
})
export class NavbarComponent {

  public locationId:any[]=[];
  public locationarray:any[]=[];

  public sidebarOpened = false;
  data: any;
  loginpage: boolean;
  IsLoad: boolean;
  UserId: string;
  user: User;
  location: string;
  locations: string;
  locationid: any;
  locationIdarray: any;
  providerlocation: any;
  value: number;
  public index1: any;
  selected: string;
  formGroup : FormGroup;
  req1: any;


  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector(".sidebar-offcanvas").classList.add("active");
    } else {
      document.querySelector(".sidebar-offcanvas").classList.remove("active");
    }
  }
  constructor(

    private fb : FormBuilder,
    config: NgbDropdownConfig,
    private authenticationService: AuthenticationService
  ) {
    config.placement = "bottom-right";
    this.user = authenticationService.userValue;
    this.IsLoad = this.data == undefined || null || "" ? true : false;

  }
  ngOnInit(): void {
    this.getlocations();



  }


   getlocations(){
     debugger;

     var location = this.user.LocationName;
    this.locationarray = location.split(',');

     for(var i = 0; i < this.locationarray.length; i++) {

       this.locationarray[i] = this.locationarray[i].replace(/^\s*/, "").replace(/\s*$/, "");



     }
     this.change('');
   }

   change(req:any){
     debugger;
this.req1 = req==""?0:req;
     var locationId = this.user.LocationId;
     this.locationIdarray = locationId.split(',');
     for(var i = 0; i < this.locationIdarray.length; i++) {
       this.locationIdarray[i] = this.locationIdarray[i].replace(/^\s*/, "").replace(/\s*$/, "");
       }
       this.providerlocation=this.locationIdarray[this.req1];


       localStorage.setItem('providerlocation',this.providerlocation);
   }
   
  logout() {
    this.authenticationService.logout();
  }
}
