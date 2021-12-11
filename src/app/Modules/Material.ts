import { NgModule } from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { MatSelectFilterModule } from "mat-select-filter";
import { MatTableExporterModule } from "mat-table-exporter";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { MatMenuModule } from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    NgxPaginationModule,
    RouterModule,
    MatMenuModule,
    FormsModule,
    NgbModule,
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
    MatAutocompleteModule,

    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
  exports: [
    NgxPaginationModule,
    RouterModule,
    MatMenuModule,
    FormsModule,
    NgbModule,
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
    MatAutocompleteModule,

    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
})
export class QuickAppProMaterialModule { }
