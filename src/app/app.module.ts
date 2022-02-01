import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserRegistrationComponent } from "./User/user-registration/user-registration.component";
import { UserLoginComponent } from "./User/user-login/user-login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "./Shared/shared";
import { Accountservice } from "./Services/account.service";
import { Accountserviceendpoint } from "./Services/account.endpoint.service";
import { EndpointBase } from "./Services/Endpoint.base.service";
import { DatePipe } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { DownloadService } from "./Services/download.service";
import { EhrInterceptor } from "./_helpers/_ehr_interceptor";
import { AuthenticationService } from "./Services/authentication.service";
import { IdService } from "./_helpers/_id.service";
import { AuthGuard } from "./_helpers/auth.guard";
import { RubyAuthenticationFailedComponenet } from "./login/ruby.authentication.failed.component";


@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    RubyAuthenticationFailedComponenet,
    
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
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
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
