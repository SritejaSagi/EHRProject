import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { UserRegistrationComponent } from "./User/user-registration/user-registration.component";
import { UserLoginComponent } from "./User/user-login/user-login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "./Shared/shared";
import { Accountservice } from "./Services/account.service";
import { Accountserviceendpoint } from "./Services/account.endpoint.service";
import { EndpointBase } from "./Services/Endpoint.base.service";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";

import { MatExpansionModule } from "@angular/material/expansion";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { MatSelectFilterModule } from "mat-select-filter";
import { MatTableExporterModule } from "mat-table-exporter";
import { MainComponent } from "./main/main.component";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { MatMenuModule } from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { DatePipe } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { DownloadService } from "./Services/download.service";
import { EhrInterceptor } from './_helpers/_ehr_interceptor';
import { AuthenticationService } from './Services/authentication.service';
import { IdService } from './_helpers/_id.service';
import { AuthGuard } from './_helpers/auth.guard';
import { RubyAuthenticationFailedComponenet} from './login/ruby.authentication.failed.component';
import { ProblemlistComponent } from './Reports/problemlist/problemlist.component';
import { CategoryreportsComponent } from './Reports/categoryreports/categoryreports.component';

import { EncounterlistComponent } from './Reports/encounterlist/encounterlist.component';
import { PatientlistComponent } from './Reports/patientlist/patientlist.component';

import { MureportsComponent } from './Reports/mureports/mureports.component';
import { CqmreportsComponent } from './Reports/cqmreports/cqmreports.component';

@NgModule({
  exports: [MatInputModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    UserRegistrationComponent,
    UserLoginComponent,
    LoginComponent,

    MainComponent,
    RubyAuthenticationFailedComponenet,
    ProblemlistComponent,
    CategoryreportsComponent,

    EncounterlistComponent,
    PatientlistComponent,

    MureportsComponent,
    CqmreportsComponent
  ],
  imports: [
    ToastrModule.forRoot(),

    SharedModule,
    NgxPaginationModule,
    BrowserModule,
    RouterModule,
    MatMenuModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatExpansionModule,
    NgxMatSelectSearchModule,
    MatSelectFilterModule,
    MatTableExporterModule,
    Ng2OrderModule,
    MatAutocompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: EhrInterceptor, multi: true },
    DownloadService,
    Accountservice,
    DatePipe,
    Accountserviceendpoint,
    AuthenticationService,
    EndpointBase,
    IdService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
