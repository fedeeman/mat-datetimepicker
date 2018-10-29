/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from "@angular/core";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material";
import { DatetimeAdapter } from "./datetime-adapter";
const ɵ0 = i => String(i);
/**
 * The default hour names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_HOUR_NAMES = range(24, ɵ0);
const ɵ1 = i => String(i);
/**
 * The default minute names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_MINUTE_NAMES = range(60, ɵ1);
/**
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
export class NativeDatetimeAdapter extends DatetimeAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} _delegate
     */
    constructor(matDateLocale, _delegate) {
        super(_delegate);
        this.setLocale(matDateLocale);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return this.createDatetime(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getHour(date) {
        return date.getHours();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMinute(date) {
        return date.getMinutes();
    }
    /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    isInNextMonth(startDate, endDate) {
        /** @type {?} */
        const nextMonth = this.getDateInNextMonth(startDate);
        return this.sameMonthAndYear(nextMonth, endDate);
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    createDatetime(year, month, date, hour, minute) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        if (hour < 0 || hour > 23) {
            throw Error(`Invalid hour "${hour}". Hour has to be between 0 and 23.`);
        }
        if (minute < 0 || minute > 59) {
            throw Error(`Invalid minute "${minute}". Minute has to be between 0 and 59.`);
        }
        /** @type {?} */
        const result = this._createDateWithOverflow(year, month, date, hour, minute);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() !== month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateInNextMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getFirstDateOfMonth(date) {
        /** @type {?} */
        const result = new Date();
        result.setFullYear(date.getFullYear(), date.getMonth(), 1);
        return result;
    }
    /**
     * @return {?}
     */
    getHourNames() {
        return DEFAULT_HOUR_NAMES;
    }
    /**
     * @return {?}
     */
    getMinuteNames() {
        return DEFAULT_MINUTE_NAMES;
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date), this.getHour(date), this.getMinute(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0, this.getHour(date), this.getMinute(date));
        }
        return newDate;
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHour(date), this.getMinute(date));
    }
    /**
     * @param {?} date
     * @param {?} hours
     * @return {?}
     */
    addCalendarHours(date, hours) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date) + hours, this.getMinute(date));
    }
    /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */
    addCalendarMinutes(date, minutes) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date) + minutes);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return super.toIso8601(date) + "T" + [
            this._2digit(date.getUTCHours()),
            this._2digit(date.getUTCMinutes())
        ].join(":");
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, "");
    }
    /**
     * Pads a number to make it two digits.
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    _2digit(n) {
        return ("00" + n).slice(-2);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hours
     * @param {?} minutes
     * @return {?}
     */
    _createDateWithOverflow(year, month, date, hours, minutes) {
        /** @type {?} */
        const result = new Date(year, month, date, hours, minutes);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
}
NativeDatetimeAdapter.decorators = [
    { type: Injectable },
];
NativeDatetimeAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
    { type: DateAdapter }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiYWRhcHRlci9uYXRpdmUtZGF0ZXRpbWUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztXQUdoQixDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7O01BQTdDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxFQUFFLEtBQWlCO1dBR2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7OztNQUEvQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFpQjs7Ozs7OztBQUV0RCxlQUFrQixNQUFjLEVBQUUsYUFBbUM7O1VBQzdELFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFHRCxNQUFNLDRCQUE2QixTQUFRLGVBQXFCOzs7OztJQUU5RCxZQUFpRCxhQUFxQixFQUFFLFNBQTRCO1FBQ2xHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsS0FB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LEdBQVc7UUFDaEQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQU9PLE9BQU8sQ0FBQyxDQUFTO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7Ozs7OztJQUdPLHVCQUF1QixDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUN6QyxLQUFhLEVBQUUsT0FBZTs7Y0FDdEQsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7UUFFMUQsdUZBQXVGO1FBQ3ZGLDBCQUEwQjtRQUMxQixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUMzQixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFuSkYsVUFBVTs7O3lDQUdJLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTtZQXRCL0MsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0xPQ0FMRVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9kYXRldGltZS1hZGFwdGVyXCI7XHJcblxyXG4vKiogVGhlIGRlZmF1bHQgaG91ciBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cclxuY29uc3QgREVGQVVMVF9IT1VSX05BTUVTID0gcmFuZ2UoMjQsIGkgPT4gU3RyaW5nKGkpKTtcclxuXHJcbi8qKiBUaGUgZGVmYXVsdCBtaW51dGUgbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXHJcbmNvbnN0IERFRkFVTFRfTUlOVVRFX05BTUVTID0gcmFuZ2UoNjAsIGkgPT4gU3RyaW5nKGkpKTtcclxuXHJcbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XHJcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhbHVlc0FycmF5W2ldID0gdmFsdWVGdW5jdGlvbihpKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlc0FycmF5O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRldGltZUFkYXB0ZXIgZXh0ZW5kcyBEYXRldGltZUFkYXB0ZXI8RGF0ZT4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPERhdGU+KSB7XHJcbiAgICBzdXBlcihfZGVsZWdhdGUpO1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobWF0RGF0ZUxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBjbG9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVEYXRldGltZSh0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmdldERhdGVJbk5leHRNb250aChzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2FtZU1vbnRoQW5kWWVhcihuZXh0TW9udGgsIGVuZERhdGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGF0ZXRpbWUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXHJcbiAgICAvLyBjcmVhdGluZyB0aGUgRGF0ZSkuXHJcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdXIgPCAwIHx8IGhvdXIgPiAyMykge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VyIFwiJHtob3VyfVwiLiBIb3VyIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IDU5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlKTtcclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHRoZSBkYXRlIHdhc24ndCBhYm92ZSB0aGUgdXBwZXIgYm91bmQgZm9yIHRoZSBtb250aCwgY2F1c2luZyB0aGUgbW9udGggdG8gb3ZlcmZsb3dcclxuICAgIGlmIChyZXN1bHQuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUluTmV4dE1vbnRoKGRhdGU6IERhdGUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEsXHJcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfSE9VUl9OQU1FUztcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBERUZBVUxUX01JTlVURV9OQU1FUztcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRGF0ZSwgeWVhcnM6IG51bWJlcik6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgeWVhcnMgKiAxMik7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBEYXRlLCBtb250aHM6IG51bWJlcik6IERhdGUge1xyXG4gICAgbGV0IG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocywgdGhpcy5nZXREYXRlKGRhdGUpLCB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuXHJcbiAgICAvLyBJdCdzIHBvc3NpYmxlIHRvIHdpbmQgdXAgaW4gdGhlIHdyb25nIG1vbnRoIGlmIHRoZSBvcmlnaW5hbCBtb250aCBoYXMgbW9yZSBkYXlzIHRoYW4gdGhlIG5ld1xyXG4gICAgLy8gbW9udGguIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGdvIHRvIHRoZSBsYXN0IGRheSBvZiB0aGUgZGVzaXJlZCBtb250aC5cclxuICAgIC8vIE5vdGU6IHRoZSBhZGRpdGlvbmFsICsgMTIgJSAxMiBlbnN1cmVzIHdlIGVuZCB1cCB3aXRoIGEgcG9zaXRpdmUgbnVtYmVyLCBzaW5jZSBKUyAlIGRvZXNuJ3RcclxuICAgIC8vIGd1YXJhbnRlZSB0aGlzLlxyXG4gICAgaWYgKHRoaXMuZ2V0TW9udGgobmV3RGF0ZSkgIT09ICgodGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocykgJSAxMiArIDEyKSAlIDEyKSB7XHJcbiAgICAgIG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHRoaXMuZ2V0WWVhcihuZXdEYXRlKSwgdGhpcy5nZXRNb250aChuZXdEYXRlKSwgMCwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0RhdGU7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRGF0ZSwgZGF5czogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSArIGRheXMsIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBEYXRlLCBob3VyczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksXHJcbiAgICAgIHRoaXMuZ2V0SG91cihkYXRlKSArIGhvdXJzLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1pbnV0ZXMoZGF0ZTogRGF0ZSwgbWludXRlczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksXHJcbiAgICAgIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkgKyBtaW51dGVzKTtcclxuICB9XHJcblxyXG4gIHRvSXNvODYwMShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdXBlci50b0lzbzg2MDEoZGF0ZSkgKyBcIlRcIiArIFtcclxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDSG91cnMoKSksXHJcbiAgICAgIHRoaXMuXzJkaWdpdChkYXRlLmdldFVUQ01pbnV0ZXMoKSlcclxuICAgIF0uam9pbihcIjpcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdHJpcCBvdXQgdW5pY29kZSBMVFIgYW5kIFJUTCBjaGFyYWN0ZXJzLiBFZGdlIGFuZCBJRSBpbnNlcnQgdGhlc2UgaW50byBmb3JtYXR0ZWQgZGF0ZXMgd2hpbGVcclxuICAgKiBvdGhlciBicm93c2VycyBkbyBub3QuIFdlIHJlbW92ZSB0aGVtIHRvIG1ha2Ugb3V0cHV0IGNvbnNpc3RlbnQgYW5kIGJlY2F1c2UgdGhleSBpbnRlcmZlcmUgd2l0aFxyXG4gICAqIGRhdGUgcGFyc2luZy5cclxuICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgdG8gc3RyaXAgZGlyZWN0aW9uIGNoYXJhY3RlcnMgZnJvbS5cclxuICAgKiBAcmV0dXJucyBUaGUgc3RyaXBwZWQgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3N0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHUyMDBlXFx1MjAwZl0vZywgXCJcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYWRzIGEgbnVtYmVyIHRvIG1ha2UgaXQgdHdvIGRpZ2l0cy5cclxuICAgKiBAcGFyYW0gbiBUaGUgbnVtYmVyIHRvIHBhZC5cclxuICAgKiBAcmV0dXJucyBUaGUgcGFkZGVkIG51bWJlci5cclxuICAgKi9cclxuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMDBcIiArIG4pLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIGEgZGF0ZSBidXQgYWxsb3dzIHRoZSBtb250aCBhbmQgZGF0ZSB0byBvdmVyZmxvdy4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSwgaG91cnMsIG1pbnV0ZXMpO1xyXG5cclxuICAgIC8vIFdlIG5lZWQgdG8gY29ycmVjdCBmb3IgdGhlIGZhY3QgdGhhdCBKUyBuYXRpdmUgRGF0ZSB0cmVhdHMgeWVhcnMgaW4gcmFuZ2UgWzAsIDk5XSBhc1xyXG4gICAgLy8gYWJicmV2aWF0aW9ucyBmb3IgMTl4eC5cclxuICAgIGlmICh5ZWFyID49IDAgJiYgeWVhciA8IDEwMCkge1xyXG4gICAgICByZXN1bHQuc2V0RnVsbFllYXIodGhpcy5nZXRZZWFyKHJlc3VsdCkgLSAxOTAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==