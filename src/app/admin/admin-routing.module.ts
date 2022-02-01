import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { MainComponent } from "../main/main.component";
import { ProviderregComponent } from "../providerreg/providerreg.component";
import { AuthGuard } from "../_helpers/auth.guard";
import { CategoryreportsComponent } from "./Reports/categoryreports/categoryreports.component";
import { CqmreportsComponent } from "./Reports/cqmreports/cqmreports.component";
import { EncounterlistComponent } from "./Reports/encounterlist/encounterlist.component";
import { MureportsComponent } from "./Reports/mureports/mureports.component";
import { PatientlistComponent } from "./Reports/patientlist/patientlist.component";
import { ProblemlistComponent } from "./Reports/problemlist/problemlist.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "cqmreports", component: CqmreportsComponent },
      { path: "problemlist", component: ProblemlistComponent },
      { path: "patientlist", component: PatientlistComponent },
      { path: "encounterlist", component: EncounterlistComponent },
      { path: "meaningfulusereports", component: MureportsComponent },
      { path: "categoryreports", component: CategoryreportsComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "providerreg",
    component: ProviderregComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
