/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { MatMomentDateModule, MomentDateModule } from "@angular/material-moment-adapter";
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from "fedeeman-datetimepicker/core";
import { MomentDatetimeAdapter } from "./moment-datetime-adapter";
import { MAT_MOMENT_DATETIME_FORMATS } from "./moment-datetime-formats";
export { MomentDatetimeAdapter } from "./moment-datetime-adapter";
export { MAT_MOMENT_DATETIME_FORMATS } from "./moment-datetime-formats";
var MomentDatetimeModule = /** @class */ (function () {
    function MomentDatetimeModule() {
    }
    MomentDatetimeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MomentDateModule],
                    providers: [
                        {
                            provide: DatetimeAdapter,
                            useClass: MomentDatetimeAdapter
                        }
                    ]
                },] },
    ];
    return MomentDatetimeModule;
}());
export { MomentDatetimeModule };
var ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
var MatMomentDatetimeModule = /** @class */ (function () {
    function MatMomentDatetimeModule() {
    }
    MatMomentDatetimeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MomentDatetimeModule, MatMomentDateModule],
                    providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0 }]
                },] },
    ];
    return MatMomentDatetimeModule;
}());
export { MatMomentDatetimeModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvIiwic291cmNlcyI6WyJhZGFwdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2pCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUNMLGVBQWUsRUFDZixvQkFBb0IsRUFDckIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RSxzQ0FBYywyQkFBMkIsQ0FBQztBQUMxQyw0Q0FBYywyQkFBMkIsQ0FBQztBQUUxQztJQUFBO0lBVUEsQ0FBQzs7Z0JBVkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7eUJBQ2hDO3FCQUNGO2lCQUNGOztJQUVELDJCQUFDO0NBQUEsQUFWRCxJQVVDO1NBRFksb0JBQW9CO1NBS3VCLDJCQUEyQjtBQUZuRjtJQUFBO0lBS0EsQ0FBQzs7Z0JBTEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLElBQTZCLEVBQUMsQ0FBQztpQkFDcEY7O0lBRUQsOEJBQUM7Q0FBQSxBQUxELElBS0M7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0TW9tZW50RGF0ZU1vZHVsZSxcclxuICBNb21lbnREYXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZXRpbWVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTXHJcbn0gZnJvbSBcImZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9tZW50RGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vbW9tZW50LWRhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTUFUX01PTUVOVF9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSBcIi4vbW9tZW50LWRhdGV0aW1lLWZvcm1hdHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21vbWVudC1kYXRldGltZS1hZGFwdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21vbWVudC1kYXRldGltZS1mb3JtYXRzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtNb21lbnREYXRlTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRGF0ZXRpbWVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogTW9tZW50RGF0ZXRpbWVBZGFwdGVyXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZXRpbWVNb2R1bGUge1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtNb21lbnREYXRldGltZU1vZHVsZSwgTWF0TW9tZW50RGF0ZU1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1BVF9EQVRFVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTUFUX01PTUVOVF9EQVRFVElNRV9GT1JNQVRTfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE1vbWVudERhdGV0aW1lTW9kdWxlIHtcclxufVxyXG4iXX0=