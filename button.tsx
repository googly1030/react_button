import React, { Children } from "react";
interface PROPS {
  children: string;
  color?: string;
  onclick?: () => void;
}
const button = ({ children, onclick, color }: PROPS) => {
  return (
    <button className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default button;
