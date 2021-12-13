import { FormGroup } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  PageEvent,
} from "@angular/material";

import { Accountservice } from "src/app/Services/account.service";
import { EncounterData } from "../../../_models";
import { TableUtil } from "../tableUtil";

@Component({
  selector: "app-encounterlist",
  templateUrl: "./encounterlist.component.html",
  styleUrls: ["./encounterlist.component.scss"],
})
export class EncounterlistComponent implements OnInit {
  encounterForm: FormGroup;
  public encounterlist = new MatTableDataSource<EncounterData>();
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  applyButtonToDisableencounter: boolean = true;
  length: number;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  encounterlength: number;
  tomorrow = new Date();
  encounterdata: {
    SstartDate: string;
    SendDate: string;
    Checked: any;
    provider_Id: any;
    location_Id: any;
  };
  showEncounterControls: boolean;

  showencounterTable: boolean;
  customizedspinner: boolean;
  EncountersColumns = [
    "Encounter_Id",
    "Patient_Name",
    "Provider_Name",
    "Birth_Date",
    "Patient_Age",
    "Encounter_Date",
    "Proc_Code",
    "Encounter_Description",
    "Proc_Fees",
    "Prime_Subscriber_No",
    "Prime_Ins_Company_Name",
    "Prim_Source_Payment_Typology",
  ];
  providerlist: any;
  filteredproviderList: any;
  locationslist: any;
  filteredlocationList: any;
  provider_Id: string;
  encounters: any;
  disabledowloadExportbtn: boolean = true;

  constructor(
    private service: Accountservice,
    private fb: FormBuilder,
    private tableutil: TableUtil,
    public datepipe: DatePipe
  ) {
    this.encounterlist = new MatTableDataSource<EncounterData>();
  }

  ngOnInit() {
    this.getProviderList();
    this.getLocationsList("");
    this.EncounterForm();
  }
  ngAfterViewInit(): void {
    this.encounterlist.paginator = this.paginator.toArray()[0];
    this.encounterlist.sort = this.sort.toArray()[0];
  }
  disableApplyButtonEncounterlist() {
    debugger;
    var Provider_Id =
      this.encounterForm.value.provider_Id == null
        ? ""
        : this.encounterForm.value.provider_Id;
    var StartDate =
      this.encounterForm.value.SstartDate == null
        ? ""
        : this.encounterForm.value.SstartDate;
    var EndDate =
      this.encounterForm.value.SendDate == null
        ? ""
        : this.encounterForm.value.SendDate;
    if (Provider_Id != "" && StartDate == "" && EndDate == "") {
      this.applyButtonToDisableencounter = false;
    } else if (Provider_Id != "" && StartDate != "" && EndDate != "") {
      this.applyButtonToDisableencounter = false;
    } else if (Provider_Id != "" && StartDate != "" && EndDate == "") {
      this.applyButtonToDisableencounter = true;
    } else if (Provider_Id != "" && StartDate == "" && EndDate != "") {
      this.applyButtonToDisableencounter = true;
    } else {
      this.applyButtonToDisableencounter = true;
    }
  }
  EncounterForm() {
    debugger;
    this.encounterForm = this.fb.group({
      SstartDate: [""],
      SendDate: [""],
      Checked: false,
      provider_Id: [""],
      location_Id: [""],
    });
  }

  onSubmitEncounterlist() {
    debugger;
    if (
      this.encounterForm.value.provider_Id == "" &&
      this.encounterForm.value.location_Id == ""
    ) {
      return;
    }
    var encounterlist = {
      SstartDate: this.datepipe.transform(
        this.encounterForm.value.SstartDate,
        "yyyy-MM-dd",
        "en-US"
      ),
      SendDate: this.datepipe.transform(
        this.encounterForm.value.SendDate,
        "yyyy-MM-dd",
        "en-US"
      ),
      Checked: this.encounterForm.value.Checked,
      provider_Id:
        this.encounterForm.value.provider_Id == ""
          ? null
          : this.encounterForm.value.provider_Id,
      location_Id:
        this.encounterForm.value.location_Id == ""
          ? null
          : this.encounterForm.value.location_Id,
    };
    this.getEncountersList(encounterlist);
    this.encounterdata = encounterlist;
  }

  getEncountersList(data: any) {
    debugger;
    this.encounters = data;
    this.customizedspinner = true;

    this.service.getEncountersList(data).subscribe((data) => {
      this.encounterlist.data = [];
      this.encounterlength = 0;
      this.showencounterTable = true;
      if (data.IsSuccess) {
        this.showEncounterControls = true;
        this.customizedspinner = true;
        this.encounterlist.data = data.ListResult as EncounterData[];
        this.encounterlength = data.ListResult.length;
        this.showencounterTable = true;
        this.disabledowloadExportbtn = false;
      }
      this.customizedspinner = false;
    });
  }
  getProviderList() {
    debugger;
    let locationid = localStorage.getItem("providerlocation");

    var req = {
      LocationId: locationid,
    };
    this.service.getProviderList(req).subscribe((data) => {
      if (data.IsSuccess) {
        this.providerlist = data.ListResult;
        this.filteredproviderList = this.providerlist.slice();
      }
    });
  }

  getLocationsList(Location: any) {
    this.service.getLocationsList(Location.Provider_Id).subscribe((data) => {
      if (data.IsSuccess) {
        this.locationslist = data.ListResult;
        this.filteredlocationList = this.locationslist.slice();
      }
    });
    // if (Location == "") {
    //   this.service.getLocationsList(Location).subscribe((data) => {
    //     if (data.IsSuccess) {
    //       this.locationslist = data.ListResult;
    //       this.filteredlocationList = this.locationslist.slice();
    //     }
    //   });
    // }
  }

  downloadEncountersExcel() {
    debugger;
    if (this.encounterlist.data.length != 0) {
      this.tableutil.exportAsExcelFileEncounter(
        this.encounterlist.data,
        "Encounter"
      );
    }
  }
}
