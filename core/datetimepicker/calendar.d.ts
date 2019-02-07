import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimeFormats } from "../adapter/datetime-formats";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
export declare class MatDatetimepickerCalendar<D> implements AfterContentInit, OnDestroy {
    private _elementRef;
    private _intl;
    private _ngZone;
    private _adapter;
    private _dateFormats;
    private changeDetectorRef;
    private _intlChanges;
    _userSelection: EventEmitter<void>;
    type: "date" | "time" | "month" | "datetime";
    /** A date representing the period (month or year) to start the calendar in. */
    startAt: D | null;
    private _startAt;
    /** Whether the calendar should be started in month or year view. */
    startView: "clock" | "month" | "year";
    /** The currently selected date. */
    selected: D | null;
    private _selected;
    /** The minimum selectable date. */
    minDate: D | null;
    private _minDate;
    /** The maximum selectable date. */
    maxDate: D | null;
    private _maxDate;
    timeInterval: number;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D, type: MatDatetimepickerFilterType) => boolean;
    /** Emits when the currently selected date changes. */
    selectedChange: EventEmitter<D>;
    /** Date filter for the month and year views. */
    _dateFilterForViews: (date: D) => boolean;
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    _activeDate: D;
    private _clampedActiveDate;
    _userSelected(): void;
    /** Whether the calendar is in month view. */
    _currentView: "clock" | "month" | "year";
    _clockView: "hour" | "minute";
    /** The label for the current calendar view. */
    readonly _yearLabel: string;
    readonly _monthYearLabel: string;
    readonly _dateLabel: string;
    readonly _hoursLabel: string;
    readonly _minutesLabel: string;
    _calendarState: string;
    constructor(_elementRef: ElementRef, _intl: MatDatepickerIntl, _ngZone: NgZone, _adapter: DatetimeAdapter<D>, _dateFormats: MatDatetimeFormats, changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Handles date selection in the month view. */
    _dateSelected(date: D): void;
    /** Handles month selection in the year view. */
    _monthSelected(month: D): void;
    _timeSelected(date: D): void;
    confirmButtonLabel: string;
    _handleConfirmButton(event: any): void;
    cancelButtonLabel: string;
    _handleCancelButton(event: any): void;
    _onActiveDateChange(date: D): void;
    _yearClicked(): void;
    _dateClicked(): void;
    _hoursClicked(): void;
    _minutesClicked(): void;
    /** Handles user clicks on the previous button. */
    _previousClicked(): void;
    /** Handles user clicks on the next button. */
    _nextClicked(): void;
    /** Whether the previous period button is enabled. */
    _previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    _nextEnabled(): boolean;
    /** Handles keydown events on the calendar body. */
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    _focusActiveCell(): void;
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    private _isSameView;
    /** Handles keydown events on the calendar body when calendar is in month view. */
    private _handleCalendarBodyKeydownInMonthView;
    /** Handles keydown events on the calendar body when calendar is in year view. */
    private _handleCalendarBodyKeydownInYearView;
    /** Handles keydown events on the calendar body when calendar is in month view. */
    private _handleCalendarBodyKeydownInClockView;
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     */
    private _prevMonthInSameCol;
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     */
    private _nextMonthInSameCol;
    private calendarState;
    _calendarStateDone(): void;
    private _2digit;
}