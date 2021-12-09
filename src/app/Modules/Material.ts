import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule } from "@angular/material";

@NgModule({
    imports: [ 
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule,       
        MatNativeDateModule,
        MatPaginatorModule,     
        MatRippleModule,
        MatSelectModule,        
        MatSortModule,
        MatTableModule,       
        MatTooltipModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatRadioModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatListModule        
    ],
    exports: [ 
        MatPaginatorModule,
        MatTableModule,
        MatNativeDateModule,
        MatPaginatorModule,       
        MatRippleModule,
        MatSelectModule,       
        MatSortModule,
        MatTableModule,      
        MatTooltipModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatRadioModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatListModule
    ],
})
export class QuickAppProMaterialModule { }