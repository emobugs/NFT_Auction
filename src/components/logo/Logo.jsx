import logo from "../../../public/images/logo.svg"
import logoMuted from "../../../public/images/logo-muted.svg"

export default function Logo ({type = 'default'}) {
    
    return(
        <div>
            {type === 'default' && 
            <img src={logo.src} alt="default logo" /> }
            {type === 'muted' && 
            <img src={logoMuted.src} alt="grayed logo" />
            }
            {/* {<img src={type === 'muted' ? logoMuted.src : logo.src} alt="setaa" />
            } */}
        </div>
    )
}
