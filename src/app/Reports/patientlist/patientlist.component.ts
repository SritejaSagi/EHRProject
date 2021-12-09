import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Accountservice } from 'src/app/Services/account.service';
import { PatientData } from '../../_models';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})

export class PatientlistComponent implements OnInit {

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  length: number;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  providerlist: any;
  filteredproviderList: any;
  locationslist: any;
  filteredlocationList: any;
  provider_Id: string;
  customizedspinner: boolean;

  patientlistlength: any;
  showpatientTable: boolean;
  patientForm: FormGroup;
  tomorrow = new Date();
  public allPatientList = new MatTableDataSource<PatientData>();
  patientlistdata: { SstartDate: string; SendDate: string; Checked: any; provider_Id: any; location_Id: any; };
  showPatientControls: boolean;
  PatientListColumns = ["Patient_Id", "Patient_Name", "Date_of_Birth", "Age", "Cell_Phone", "Home_phone", "Work_Phone",
  "Email_Address", "Gender", "Address", "City", "State", "Zip", "Prime_Subscriber_No", "Prime_Subscriber_Name"];
  applyButtonToDisable: boolean=true;
  name: string;
  subject:string;
  disabledowloadExportbtn: boolean=true;

  constructor(private service: Accountservice,private fb:FormBuilder,private tableutil:TableUtil,public datepipe: DatePipe) {
    this.allPatientList = new MatTableDataSource<PatientData>();
  }

  ngOnInit() {
    this.PatientForm();
    this. getProviderList();
    this.getLocationsList('');
  }
  ngAfterViewInit(): void {

    this.allPatientList.paginator = this.paginator.toArray()[0];
    this.allPatientList.sort = this.sort.toArray()[0];

  }
  PatientForm() {
    this.patientForm = this.fb.group({
      SstartDate: [''],
      SendDate: [''],
      AstartDate: [''],
      AendDate: [''],
      Checked: [''],
      provider_Id: [''],
      location_Id: ['']
    })
  }

  onSubmitallpatientlist() {
    if (this.patientForm.value.provider_Id == "" && this.patientForm.value.location_Id == "") {
      return;
    }
    var patientlist = {
      "SstartDate":this.datepipe.transform(this.patientForm.value.SstartDate, 'yyyy-MM-dd','en-US'),
      "SendDate":this.datepipe.transform(this.patientForm.value.SendDate, 'yyyy-MM-dd','en-US'),
      "AstartDate":this.datepipe.transform(this.patientForm.value.AstartDate, 'yyyy-MM-dd','en-US'),
      "AendDate":this.datepipe.transform(this.patientForm.value.AendDate, 'yyyy-MM-dd','en-US'),
      "Checked":this.patientForm.value.Checked,
        "provider_Id":this.patientForm.value.provider_Id=="" ? null:this.patientForm.value.provider_Id,
        "location_Id":this.patientForm.value.location_Id=="" ? null:this.patientForm.value.location_Id
    }
    this.getAllPatientList(patientlist);
    this.patientlistdata = patientlist;
  }
  disableApplyButton(){
    var Provider_Id = this.patientForm.value.provider_Id == null ? "":this.patientForm.value.provider_Id;
    var StartDate = this.patientForm.value.SstartDate == null ? "": this.patientForm.value.SstartDate;
    var EndDate = this.patientForm.value.SendDate == null ? "": this.patientForm.value.SendDate;
    var AstartDate = this.patientForm.value.AstartDate == null ? "": this.patientForm.value.AstartDate;
    var AendDate = this.patientForm.value.AendDate == null ? "": this.patientForm.value.AendDate;
    if((Provider_Id !="")&&(StartDate =="")&&(EndDate =="")&&(AstartDate =="")&&(AendDate ==""))  {
      this.applyButtonToDisable =false;
    }
    else if((Provider_Id !="")&&(StartDate !="")&&(EndDate !="")&&(AstartDate !="")&&(AendDate !="")){
      this.applyButtonToDisable =false;
    }
    else if((Provider_Id !="")&&(StartDate !="")&&(EndDate !="")&&(AstartDate =="")&&(AendDate =="")){
      this.applyButtonToDisable =false;
    }
    else if((Provider_Id !="")&&(StartDate =="")&&(EndDate =="")&&(AstartDate !="")&&(AendDate !="")){
      this.applyButtonToDisable =false;
    }
       else if((Provider_Id !="")&&(StartDate !="")&&(EndDate =="")&&(AstartDate =="")&&(AendDate =="")){
      this.applyButtonToDisable =true;
    }
    else if((Provider_Id !="")&&(StartDate =="")&&(EndDate !="")&&(AstartDate =="")&&(AendDate =="")){
      this.applyButtonToDisable =true;
    }
    else if((Provider_Id !="")&&(AstartDate =="")&&(AendDate !="")&&(StartDate =="")&&(EndDate =="")){
      this.applyButtonToDisable =true;
    }
    else if((Provider_Id !="")&&(AstartDate =="")&&(AendDate !="")&&(StartDate =="")&&(EndDate =="")){
      this.applyButtonToDisable =true;
    }
    else{
      this.applyButtonToDisable =true;
    }
  }
  getAllPatientList(data: any) {
    this.customizedspinner = true;

    this.service.getAllPatientList(data).subscribe(data => {
      this.allPatientList.data = [];
      this.allPatientList.data = data.ListResult as PatientData[];
      this.patientlistlength = 0;
      this.showpatientTable = true;
      if (data.IsSuccess) {
        this.showPatientControls = true;
        this.customizedspinner = true;
        this.allPatientList.data = data.ListResult as PatientData[];
        this.patientlistlength = data.ListResult.length;
        this.showpatientTable = true;
        this.disabledowloadExportbtn = false;
      }
      this.customizedspinner = false;
    });
  }
  getProviderList(){
    debugger;
  let locationid=localStorage.getItem('providerlocation');

    var req ={
      "LocationId":locationid,
    }
    this.service.getProviderList(req).subscribe(data => {
      if (data.IsSuccess) {
        this.providerlist = data.ListResult;
        this.filteredproviderList = this.providerlist.slice();
      }
    });
  }
  downloadPatientListExcel(){
    if(this.allPatientList.data.length != 0){
      this.tableutil.exportAsExcelFilePatient(this.allPatientList.data, 'Patient');
    }
  }
  getLocationsList(Location: any) {

    this.service.getLocationsList(Location.Provider_Id).subscribe(data => {
      if (data.IsSuccess) {
        this.locationslist = data.ListResult;
        this.filteredlocationList = this.locationslist.slice();
      }
    });
    if (Location == "") {
      this.service.getLocationsList(Location).subscribe(data => {
        if (data.IsSuccess) {
          this.locationslist = data.ListResult;
          this.filteredlocationList = this.locationslist.slice();
        }
      });
    }
  }
}
