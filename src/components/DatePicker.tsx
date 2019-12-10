import React, { useState } from "react";

import { PickerCore } from "./PickerCore";

export const DatePicker = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const togglePicker = () => {
    setState(s => ({
      ...state,
      isOpen: !s.isOpen
    }));
  };

  return (
    <>
      <input type="text" onClick={togglePicker} />
      <PickerCore isOpen={state.isOpen} />
    </>
  );
};
