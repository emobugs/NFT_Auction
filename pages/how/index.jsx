import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Hero from "../../src/components/hero/Hero"
import Description from "../../src/components/description/Description"


export default function index({text}) {
  return (
    <div>
        <Header/>
        <Hero text={text}/>
        <Description text={text} image={image}/>
        <Footer/>
    </div>
  )
}
