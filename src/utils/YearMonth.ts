import dayjs, { Dayjs } from "dayjs";

export class YearMonth {
  internal: Dayjs;

  constructor(d: Dayjs) {
    this.internal = d.startOf("month");
  }

  static create(year: number, month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) {
    const zeroFilled = month.toString().padStart(2, "0");
    new YearMonth(dayjs(`${year}-${zeroFilled}-01T00:00:00.000Z`));
  }

  year() {
    return this.internal.year();
  }

  month() {
    return this.internal.month() + 1;
  }

  format(template?: string) {
    return this.internal.format(template);
  }

  nextMonth() {
    return new YearMonth(this.internal.add(1, "month"));
  }

  previousMonth() {
    return new YearMonth(this.internal.subtract(1, "month"));
  }
}