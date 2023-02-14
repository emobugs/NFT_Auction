
export default function Logo({ type = "default" }) {
    const logoPath = `./images/logo`;
    const imgName = {
        'default': '',
        'muted': '-muted'
    }

  return <img src={logoPath + imgName[type] + '.svg'} alt="logo" /> ;
}
