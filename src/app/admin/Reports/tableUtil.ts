import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.csv';

@Injectable({
  providedIn: 'root'
})
export class TableUtil {

  constructor() { }
  public exportAsExcelFilePatient(json: any[], excelFileName: string): void {

    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'Patient-Report': myworksheet }, SheetNames: ['Patient-Report'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  public exportAsExcelFileEncounter(json: any[], excelFileName: string): void {
  
    let Heading = [['Id','Birth Date','Encounter Date','Encounter Id','Patient Name','Provider Name','Birth Date',' Age','Encounter Date','Proc Code','Description','Proc Fees','Prime Subscriber Id','Prime Ins Company Name','Prim Source of Payment Typology'
  ]];
    const wb1 = XLSX.utils.book_new();
    const ws1: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(ws1, Heading);
    XLSX.utils.sheet_add_json(ws1, json, { origin: 'A2', skipHeader: true });
    //ws.delete_cols(6, 3)
    ws1['!cols'] = [
      {
        "hidden": true
      },
      {
        "hidden": true
      },
      {
        "hidden": true
      },
     null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ];
    const myworkbook: XLSX.WorkBook = { Sheets: { 'Encounter-Report': ws1 }, SheetNames: ['Encounter-Report'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  public exportAsExcelFileProblem(json: any[], excelFileName: string): void {

    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'Problem-Report': myworksheet }, SheetNames: ['Problem-Report'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '-Report'+ EXCEL_EXTENSION);
  }
}
