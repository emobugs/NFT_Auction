import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Hero from "../../src/components/hero/Hero"
import Description from "../../src/components/description/Description"


export default function index() {
  return (
    <div>
        <Header></Header>
        <Hero text="How it works"></Hero>
        <Description text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."></Description>
        <Footer></Footer>
    </div>
  )
}
