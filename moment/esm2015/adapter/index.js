import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { MatMomentDateModule, MomentDateModule } from "@angular/material-moment-adapter";
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from "fedeeman-datetimepicker/core";
import { MomentDatetimeAdapter } from "./moment-datetime-adapter";
import { MAT_MOMENT_DATETIME_FORMATS } from "./moment-datetime-formats";
export * from "./moment-datetime-adapter";
export * from "./moment-datetime-formats";
let MomentDatetimeModule = class MomentDatetimeModule {
};
MomentDatetimeModule = __decorate([
    NgModule({
        imports: [MomentDateModule],
        providers: [
            {
                provide: DatetimeAdapter,
                useClass: MomentDatetimeAdapter
            }
        ]
    })
], MomentDatetimeModule);
export { MomentDatetimeModule };
const ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
let MatMomentDatetimeModule = class MatMomentDatetimeModule {
};
MatMomentDatetimeModule = __decorate([
    NgModule({
        imports: [MomentDatetimeModule, MatMomentDateModule],
        providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0 }]
    })
], MatMomentDatetimeModule);
export { MatMomentDatetimeModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvIiwic291cmNlcyI6WyJhZGFwdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2pCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUNMLGVBQWUsRUFDZixvQkFBb0IsRUFDckIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RSxjQUFjLDJCQUEyQixDQUFDO0FBQzFDLGNBQWMsMkJBQTJCLENBQUM7QUFXMUMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FDaEMsQ0FBQTtBQURZLG9CQUFvQjtJQVRoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsUUFBUSxFQUFFLHFCQUFxQjthQUNoQztTQUNGO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQUNoQztTQURZLG9CQUFvQjtXQUt1QiwyQkFBMkI7QUFFbkYsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0FDbkMsQ0FBQTtBQURZLHVCQUF1QjtJQUpuQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQztRQUNwRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLElBQTZCLEVBQUMsQ0FBQztLQUNwRixDQUFDO0dBQ1csdUJBQXVCLENBQ25DO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1hdE1vbWVudERhdGVNb2R1bGUsXHJcbiAgTW9tZW50RGF0ZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlclwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGV0aW1lQWRhcHRlcixcclxuICBNQVRfREFURVRJTUVfRk9STUFUU1xyXG59IGZyb20gXCJmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vbWVudERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL21vbWVudC1kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL21vbWVudC1kYXRldGltZS1mb3JtYXRzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb21lbnQtZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb21lbnQtZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTW9tZW50RGF0ZU1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IERhdGV0aW1lQWRhcHRlcixcclxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGV0aW1lQWRhcHRlclxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGV0aW1lTW9kdWxlIHtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTW9tZW50RGF0ZXRpbWVNb2R1bGUsIE1hdE1vbWVudERhdGVNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfREFURVRJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURVRJTUVfRk9STUFUU31dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRNb21lbnREYXRldGltZU1vZHVsZSB7XHJcbn1cclxuIl19