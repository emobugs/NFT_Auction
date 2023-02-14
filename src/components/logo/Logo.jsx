
export default function Logo({ type = "default" }) {
    const defaultUrl = `./images/logo.svg`;
    const mutedtUrl = `./images/logo-muted.svg`;
    // const imgName = {
    //     'default': '',
    //     'muted': '-muted'
    // }
    if(type === 'default'){
        return <img src={defaultUrl} alt="logo" /> ;
    } return <img src={mutedtUrl} alt="logo" />

}
