
import logo from "../../../public/images/logo.svg"
import logoMuted from "../../../public/images/logo-muted.svg"
// import { useState, useEffect } from "react";

export default function Logo({ type = "default" }) {

  return (
    <div>
      {type === 'default' && <img src='./images/logo.svg' alt="logo" /> }
      { type === 'muted' && <img src='./images/logo-muted.svg' alt="grayed logo" />}
    </div>
  );
}
