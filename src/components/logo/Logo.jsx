
export default function Logo({ type = 'default' }) {
    const defaultUrl = "./images/logo.svg";
    const mutedtUrl = "./images/logo-muted.svg";

    if(type === 'default'){
        return <img src={defaultUrl} alt="logo" /> ;
    } else if (type === 'muted'){
    return <img src={mutedtUrl} alt="logo" />
}
}
