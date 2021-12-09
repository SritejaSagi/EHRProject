
import { CategoryreportsComponent } from './Reports/categoryreports/categoryreports.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { AuthGuard } from './_helpers/auth.guard';
import { ProblemlistComponent } from "./Reports/problemlist/problemlist.component";
import { PatientlistComponent } from './Reports/patientlist/patientlist.component';
import { EncounterlistComponent } from './Reports/encounterlist/encounterlist.component';
import { MureportsComponent } from './Reports/mureports/mureports.component';
import { CqmreportsComponent } from './Reports/cqmreports/cqmreports.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "cqmreports", component:CqmreportsComponent },
         { path: "problemlist", component: ProblemlistComponent },
      { path: "patientlist", component: PatientlistComponent },
      { path: "encounterlist", component: EncounterlistComponent },
      { path: "meaningfulusereports", component: MureportsComponent},
      { path: "categoryreports", component: CategoryreportsComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
