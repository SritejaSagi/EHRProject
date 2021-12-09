import { Component } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [NgbDropdownConfig],
})
export class AppComponent {
  data: any;
  IsLoad: boolean;
  constructor() {
    this.IsLoad = this.data == undefined || null || "" ? true : false;
  }
}
