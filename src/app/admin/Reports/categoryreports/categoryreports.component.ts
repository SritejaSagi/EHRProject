import { TableUtil } from './../tableUtil';
import { Component, OnInit } from '@angular/core';
import { Accountservice } from 'src/app/Services/account.service';

@Component({
  selector: 'app-categoryreports',
  templateUrl: './categoryreports.component.html',
  styleUrls: ['./categoryreports.component.scss']
})
export class CategoryreportsComponent implements OnInit {
  category: { Id: number; Name: string; }[];
  categoryId: any;
  reports: number;
  disable: boolean;
  mureportsstage2: boolean;
  mureportsstage3: boolean;
  cqmreports: boolean;
  patientlist: boolean;
  encounterlist: boolean;
  problem: boolean;
  Reports: any;
  mureports: boolean;
  showControls: boolean;


  constructor(private tableutil: TableUtil, private service: Accountservice) { }

  ngOnInit(): void {
    debugger;

    this.category = [
      { Id: 1, Name: 'MeaningfulUse' },
      { Id: 2, Name: ' Clinical Quality Measures' },
      { Id: 3, Name: ' Patient List' },
      { Id: 4, Name: ' Encouters' },
      { Id: 5, Name: ' Problem List' },
    ];
    this.changereports(this.Reports);
  }

  changereports(req) {
    debugger;
    this.categoryId = req;
    if (req == 1) {
      this.Reports = [
        { RepId: 1, Name: 'MU Summary', Id: 1 },
        { RepId: 2, Name: 'CPOE: Medical Orders', Id: 1 },
        { RepId: 3, Name: 'CPOE: Laboratory Orders', Id: 1 },
        { RepId: 4, Name: 'CPOE: Radiology Orders', Id: 1 },
        { RepId: 5, Name: 'Electronic Prescribing', Id: 1 },
        { RepId: 6, Name: 'Health Info Exchange', Id: 1 },
        { RepId: 7, Name: 'Patient Electronic Access', Id: 1 },
        { RepId: 8, Name: 'View, Download, Transmit', Id: 1 },
        { RepId: 9, Name: 'Secure Messaging', Id: 1 },
      ];
      this.reports == 0;
    }

    else if (req == 2) {
      this.showReport(this.categoryId);

    }
    else if (req == 3) {
      this.Reports = [
        { RepId: 1, Name: 'Patient List Report', Id: 3 },
      ];
      this.reports == 0;
      this.showReport(this.categoryId);

    }
    else if (req == 4) {
      this.Reports = [
        { RepId: 1, Name: 'Encouter Report', Id: 4 },
      ];
      this.reports == 0;
    }
    else if (req == 5) {
      this.Reports = [
        { RepId: 1, Name: 'Problem List Report', Id: 5 },
      ];
      this.reports == 0;
    }
    else {
      this.Reports = [
        { RepId: 0, Name: 'No results found', Id: 0 },
      ];
      this.reports == 0;
    }
    this.showReport(this.categoryId);
  }

  reportsId(req) {
    this.reports = req;
    if (req == 0 || req == null) {
      this.disable = false;
    }
    else if (req >= 1) {
      this.disable = true;
    }
    this.showReport(this.reports);
  }
  showReport(req) {
    if (this.categoryId == 1 && this.reports >= 1) {
      this.cqmreports = false;
      this.patientlist = false;
      this.encounterlist = false;
      this.problem = false;
      this.mureports = true;
    }
    else if (req == 2) {
      this.mureports = false;
      this.patientlist = false;
      this.encounterlist = false;
      this.problem = false;
      this.cqmreports = true;
    }
    else if (this.categoryId == 3 && this.reports == 1) {
      this.mureports = false;
      this.cqmreports = false;
      this.encounterlist = false;
      this.problem = false;
      this.patientlist = true;
    }
    else if (this.categoryId == 4 && this.reports == 1) {
      this.mureports = false;
      this.cqmreports = false;
      this.patientlist = false;
      this.problem = false;
      this.encounterlist = true;
    }
    else if (this.categoryId == 5 && this.reports == 1) {
      this.mureports = false;
      this.cqmreports = false;
      this.patientlist = false;
      this.encounterlist = false;
      this.problem = true;
    }
  }
}


