import React from "react";
import "./../../Styles/button.css";
function Button({ variant = "", disableShadow = false, disabled = false, startIcon="", endIcon="", size="", color="Default"}) {
  const shadowDisabled = disableShadow ? "disableShadow" : "";
  const className = `button ${variant} ${shadowDisabled} ${startIcon || endIcon ? "icon":""} ${size} ${color}`;

  return (
    <>
      <button disabled={disabled} className={className}>
        {startIcon?<span className="material-icons">{startIcon}</span>:""}
        {color}
        {endIcon?<span className="material-icons">{endIcon}</span>:""}
      </button>
    </>
  );
}

export default Button;
