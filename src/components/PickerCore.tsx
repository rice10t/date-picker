import React, { useState } from "react";
import cn from "classnames";
import dayjs, { Dayjs } from "dayjs";
import styles from "./PickerCore.css";
import { PickerBody } from "./PickerBody";
import { PickerHeader } from "./PickerHeader";
import { YearMonth } from "../utils/YearMonth";

export const PickerCore = ({ isOpen }: { isOpen: boolean }) => {
  const [state, setState] = useState(() => {
    const now = dayjs();
    return {
      now: now,
      selected: now,
      displaying: new YearMonth(now)
    };
  });

  const handleClickLeft = () => {
    setState(s => ({
      ...s,
      displaying: s.displaying.previousMonth()
    }));
  };

  const handleClickRight = () => {
    setState(s => ({
      ...s,
      displaying: s.displaying.nextMonth()
    }));
  };

  return (
    <>
      <div
        className={cn({
          [styles.container]: true,
          [styles.container_closed]: !isOpen
        })}
      >
        <PickerHeader displaying={state.displaying} onClickLeft={handleClickLeft} onClickRight={handleClickRight} />
        <PickerBody selected={state.selected} displaying={state.displaying} />
      </div>
    </>
  );
};
