import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Hero from "../../src/components/hero/Hero"
import Description from "../../src/components/description/Description"


export default function index() {
  return (
    <div>
        <Header></Header>
        <Hero text={text}></Hero>
        <Description text={text} image={image}></Description>
        <Footer></Footer>
    </div>
  )
}
