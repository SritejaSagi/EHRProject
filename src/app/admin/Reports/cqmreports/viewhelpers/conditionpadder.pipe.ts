import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "conditionpadder",
})
export class ConditionpadderPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  transform(value: number, newline: number): any {
    debugger;
    let paddingmultiplier: number = 30;
    let linemultiplier: number = 20;
    if (newline > 0) {
      return this.sanitizer.bypassSecurityTrustStyle(
        "padding-left:" +
          value * paddingmultiplier +
          "px; padding-top:" +
          newline * linemultiplier +
          "px;"
      );
    } else {
      return this.sanitizer.bypassSecurityTrustStyle(
        "padding-left:" + value * paddingmultiplier + "px;"
      );
    }
  }
}
