import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { CategoryreportsComponent } from "./Reports/categoryreports/categoryreports.component";
import { CqmreportsComponent } from "./Reports/cqmreports/cqmreports.component";
import { EncounterlistComponent } from "./Reports/encounterlist/encounterlist.component";
import { MureportsComponent } from "./Reports/mureports/mureports.component";
import { PatientlistComponent } from "./Reports/patientlist/patientlist.component";
import { ProblemlistComponent } from "./Reports/problemlist/problemlist.component";
import { Condition } from "./Reports/cqmreports/viewhelpers/condition.renderer/condition.renderer.component"
import { MainComponent } from "../main/main.component";
import { LoginComponent } from "../login/login.component";
import { SharedModule } from "../Shared/shared";
import { NavbarComponent } from "../navbar/navbar.component";
import { ConditionpadderPipe } from "../admin/Reports/cqmreports/viewhelpers/conditionpadder.pipe";
import { ConditionformaterPipe } from "../admin/Reports/cqmreports/viewhelpers/conditionformater.pipe";
import { FooterComponent } from "../footer/footer.component";



@NgModule({
  exports: [],
  declarations: [
    NavbarComponent,
    CategoryreportsComponent,
    CqmreportsComponent,
    EncounterlistComponent,
    MureportsComponent,
    EncounterlistComponent,
    PatientlistComponent,
    ProblemlistComponent,
    Condition,
    MainComponent,
    LoginComponent,
    ConditionpadderPipe,
    ConditionformaterPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
})
export class AdminModule { }
