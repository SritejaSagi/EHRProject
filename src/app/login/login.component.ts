import { getLocaleDateTimeFormat } from "@angular/common";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit, ɵɵqueryRefresh } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Accountservice } from "../Services/account.service";
import { interval, Subscription } from "rxjs";
import { AuthenticationService } from "../Services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  getlogin: any;
  loginForm: any;
  message: string = "";
  login: any;
  showspinner: boolean = false;
  private updateSubscription: Subscription;
  ruby_session_id: any = "";
  constructor(
    private fb: FormBuilder,
    protected http: HttpClient,
    private accountservice: Accountservice,
    private authenticationService: AuthenticationService,
    protected router: Router
  ) {}
  provider_id: any;
  hash_key: any = "";
  creds: any;

  ngOnInit() {

    const url = window.location.href;
    if (url.includes("?")) {
      this.showspinner = true;
      const httpParams = new HttpParams({ fromString: url.split("?")[1] });
      this.ruby_session_id = httpParams.get("s_id");
      if (this.ruby_session_id != "" && this.ruby_session_id != null) {
        this.message = "Please wait while navigating to reports page";
        this.authenticationService.loginWithRubyCredentials(
          this.ruby_session_id
        );
      }else
      this.showspinner = false;
    }

    this.buildForm();
  }

  onSignIn() {
    this.router.navigate(["/mureports"]);
  }

  buildForm() {
    this.loginForm = this.fb.group({
      UserName: [""],
      Password: [""],
    });
  }

  OnFormSubmit() {
    debugger;
    if (this.loginForm.Invalid) {
      return;
    }
    var data = this.loginForm.value;
    var creds = {
      "EmailId": data.UserName,
      "Password": data.Password,
    };

    this.authenticationService.loginWithFormCredentials(creds).subscribe(resp => {

      if (!resp.IsSuccess){
        this.showspinner = false;
        this.message = '';
        //this.authfailedmessage = "Enter valid Email Id and Password";
      }
    });

    /*var req = {
      UserName: data.UserName,
      Password: data.Password,
    };
    this.accountservice.GetUserLogin(req).subscribe((data) => {
      //this.getlogin=this.getlogin.ListResult;
      //this.sample=this.datasource[0];
      this.getlogin = data;
      if (this.getlogin.IsSuccess) {
        debugger;
        localStorage.setItem("UserName", req.UserName);
        localStorage.setItem("FirstName", this.getlogin.Result.FirstName);
        localStorage.setItem("LastName", this.getlogin.Result.LastName);
        localStorage.setItem("Location", this.getlogin.Result.Location);

        //  this.router.navigate(['../dashboard']);
        this.router.navigate(["./mureports"]).then(() => {
          window.location.reload();
        });

        // window.location.href="/dashboard";
        // this.router.snapshot
        //window.location.href="/EHRCQMReports/Web/dashboard";
        // this.login = data;
        // this.router.navigateByUrl('/dashboard');
      } else {
        this.message = "Invalid EmailId & Password";
        console.log("Invalid EmailId & Password");
        this.loginForm.reset();
      }
    });*/
  }
}
