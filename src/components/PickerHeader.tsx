import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import { Dayjs } from "dayjs";
import { YearMonth } from "../utils/YearMonth";

export const PickerHeader: FunctionComponent<{
  displaying: YearMonth;
  onClickLeft?: (e: SyntheticEvent) => void;
  onClickRight?: (e: SyntheticEvent) => void;
}> = ({ displaying, onClickLeft = () => undefined, onClickRight = () => undefined }) => {
  const ignore = (f: (e: SyntheticEvent) => void) => (e: SyntheticEvent) => {
    e.preventDefault();
    f(e);
  };

  return (
    <div>
      <a href="" onClick={ignore(onClickLeft)}>
        &lt;
      </a>
      <span>{displaying.format("YYYY-MM")}</span>
      <a href="" onClick={ignore(onClickRight)}>
        &gt;
      </a>
    </div>
  );
};
