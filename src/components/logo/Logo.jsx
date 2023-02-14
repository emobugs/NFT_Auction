
import logoPath from "../../../public/images/logo.svg"
import logoMutedPath from "../../../public/images/logo-muted.svg"
import { useState, useEffect } from "react";

export default function Logo({ type = "default" }) {
  const [logo, setlogo] = useState(logo);

  useEffect(() => {
    if(type === 'default'){
        setlogo(logoPath.src)
    } else if(type === 'muted'){
        setlogo(logoMutedPath.src)
    }
}, [type]);

  return (
    <div>
      {<img src={logo} alt="logo" /> }
      {/* {type === 'muted' && <img src={logo} alt="logo" /> } */}
      {/* {type === 'muted' && 
            <img src={logoMuted.src} alt="grayed logo" />
            } */}
      {/* {<img src={type === 'muted' ? logoMuted.src : logo.src} alt="setaa" />
            } */}
    </div>
  );
}
