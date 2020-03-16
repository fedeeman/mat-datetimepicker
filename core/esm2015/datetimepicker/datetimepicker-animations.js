import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
export const fadeInContent = trigger("fadeInContent", [
    state("showing", style({ opacity: 1 })),
    transition("void => showing", [
        style({ opacity: 0 }),
        animate(`150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)`)
    ])
]);
export const slideCalendar = trigger("slideCalendar", [
    transition("* => left", [
        animate(180, keyframes([
            style({ transform: "translateX(100%)", offset: 0.5 }),
            style({ transform: "translateX(-100%)", offset: 0.51 }),
            style({ transform: "translateX(0)", offset: 1 })
        ]))
    ]),
    transition("* => right", [
        animate(180, keyframes([
            style({ transform: "translateX(-100%)", offset: 0.5 }),
            style({ transform: "translateX(100%)", offset: 0.51 }),
            style({ transform: "translateX(0)", offset: 1 })
        ]))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxPQUFPLEVBRVAsU0FBUyxFQUNULEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBRTdCOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQTZCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDOUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNyQyxVQUFVLENBQUMsaUJBQWlCLEVBQUU7UUFDNUIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyw4Q0FBOEMsQ0FBQztLQUN4RCxDQUFDO0NBQ0gsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUE2QixPQUFPLENBQUMsZUFBZSxFQUFFO0lBQzlFLFVBQVUsQ0FBQyxXQUFXLEVBQUU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckIsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztZQUNuRCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO1NBQy9DLENBQUMsQ0FBQztLQUNKLENBQUM7SUFDRixVQUFVLENBQUMsWUFBWSxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7WUFDcEQsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztTQUMvQyxDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3RhdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGFuaW1hdGlvbiBmYWRlcyBpbiB0aGUgYmFja2dyb3VuZCBjb2xvciBhbmQgdGV4dCBjb250ZW50IG9mIHRoZVxyXG4gKiBzZWxlY3QncyBvcHRpb25zLiBJdCBpcyB0aW1lIGRlbGF5ZWQgdG8gb2NjdXIgMTAwbXMgYWZ0ZXIgdGhlIG92ZXJsYXlcclxuICogcGFuZWwgaGFzIHRyYW5zZm9ybWVkIGluLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkNvbnRlbnQ6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXCJmYWRlSW5Db250ZW50XCIsIFtcclxuICBzdGF0ZShcInNob3dpbmdcIiwgc3R5bGUoe29wYWNpdHk6IDF9KSksXHJcbiAgdHJhbnNpdGlvbihcInZvaWQgPT4gc2hvd2luZ1wiLCBbXHJcbiAgICBzdHlsZSh7b3BhY2l0eTogMH0pLFxyXG4gICAgYW5pbWF0ZShgMTUwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMilgKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlQ2FsZW5kYXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXCJzbGlkZUNhbGVuZGFyXCIsIFtcclxuICB0cmFuc2l0aW9uKFwiKiA9PiBsZWZ0XCIsIFtcclxuICAgIGFuaW1hdGUoMTgwLCBrZXlmcmFtZXMoW1xyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwJSlcIiwgb2Zmc2V0OiAwLjV9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLCBvZmZzZXQ6IDAuNTF9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsIG9mZnNldDogMX0pXHJcbiAgICBdKSlcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKFwiKiA9PiByaWdodFwiLCBbXHJcbiAgICBhbmltYXRlKDE4MCwga2V5ZnJhbWVzKFtcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLCBvZmZzZXQ6IDAuNX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwJSlcIiwgb2Zmc2V0OiAwLjUxfSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLCBvZmZzZXQ6IDF9KVxyXG4gICAgXSkpXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==