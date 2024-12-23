import { useState } from "react";

export default function useDisable() {
  const [disable, setDisable] = useState(true);

  const handelOnChangeDisable = (e, state) => {
    if (!state) {
      const val = e.target.value;
      if (val) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    } else {
      if (!state.includes('')) {
        setDisable(false);
      }else{
        setDisable(true);
      }
    }
  };

  return { disable, setDisable, handelOnChangeDisable };
}
