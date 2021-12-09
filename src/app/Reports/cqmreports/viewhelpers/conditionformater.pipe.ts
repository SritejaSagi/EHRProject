import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "conditionformater",
})
export class ConditionformaterPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  transform(value: any, crossmark, tickmark): any {
    debugger;
    return this.sanitizer.bypassSecurityTrustHtml(
      value
        .replace(
          "[0]",
          "<span class='" +
            crossmark +
            "' style='color: #a63b12;background-color: #edd8d0;'>✗</span>"
        )
        .replace(
          "[1]",
          "<span class='" +
            tickmark +
            "'  style='color: #41b6a6;background-color: #e5f8f5;'>✓</span>"
        )
    );
  }
}
