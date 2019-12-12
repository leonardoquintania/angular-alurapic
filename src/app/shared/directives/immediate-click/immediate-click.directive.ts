import { Directive, ElementRef } from "@angular/core";
import { PlatformDetectorService } from "../../../core/plataform-detector/platform-detector.service";

@Directive({
    selector: '[immediateClick]'
})
export class immediateClickDirective {

    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlatformDetectorService) {}

        ngOnInit(): void {    
            this.platFormDetector.isPlatformBrowser &&
            this.element.nativeElement.click();

    }
}