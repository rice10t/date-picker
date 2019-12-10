import React, { FunctionComponent, useState } from "react";
import { Dayjs } from "dayjs";
import styles from "./PickerBody.css";
import { YearMonth } from "../utils/YearMonth";

const daysInMonth = (d: Dayjs): number[] => {
  const end = d.daysInMonth();
  return Array.from({ length: end }, (v, i) => i + 1);
};

const generateCalendar = (d: Dayjs, row: number): number[] => {
  const currentMonth = d.startOf("month");
  const previousMonth = currentMonth.subtract(1, "month");
  const nextMonth = currentMonth.add(1, "month");

  const currentMonthDays = daysInMonth(currentMonth);
  const previousMonthDays = daysInMonth(previousMonth);
  const nextMonthDays = daysInMonth(nextMonth);

  const prefix = currentMonth.day() > 0 ? previousMonthDays.slice(-currentMonth.day()) : [];
  const suffix = nextMonthDays.slice(0, 7 * row - (prefix.length + currentMonthDays.length));

  return [...prefix, ...currentMonthDays, ...suffix];
};

export const PickerBody: FunctionComponent<{ selected: Dayjs; displaying: YearMonth }> = ({ selected, displaying }) => {
  const daysDiv = generateCalendar(displaying.internal, 6).map((date, index) => (
    <div key={index} className={styles.dayCell}>
      {date}
    </div>
  ));

  return <div className={styles.gridWrapper}>{daysDiv}</div>;
};
