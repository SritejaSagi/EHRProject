import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuickAppProMaterialModule } from "../Modules/Material";

@NgModule({
    imports: [
        QuickAppProMaterialModule,     
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        QuickAppProMaterialModule,
     
    ],
    declarations: [],
    entryComponents: []
  })
  export class SharedModule {}