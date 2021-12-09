import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  data: any;
  IsLoad: boolean;
  constructor(protected router: Router) {
    this.IsLoad = this.data == undefined || null || "" ? true : false;
  }
}
