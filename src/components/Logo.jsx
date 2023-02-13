import logo,{src} from "../../public/images/logo.svg"
import logoMuted from "../../public/images/logo-muted.svg"

function Logo ({type = 'default'}) {
    
    return(
        <div>
            {/* {type === 'default' && 
            <img src={logo.src} alt="setaa" /> }
            {type === 'muted' && 
            <img src={logoMuted.src} alt="setaa" />
            } */}
            {<img src={type === 'muted' ? logoMuted.src : logo.src} alt="setaa" />
            }
        </div>
    )
}

export default Logo;