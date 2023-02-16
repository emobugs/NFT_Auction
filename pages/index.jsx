import Example from "../src/components/example/Example";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/card/Card";
import How from "../src/components/how/How";
import Step from "../src/components/how/Step";

export default function Index() {
  return (
    <div>
      {/* <Footer></Footer> */}
      {/* <How items = {
        [
          {
            number:1,
            title:'Setaaa idvam za teb',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            quo placeat et dolore quis blanditiis unde minima minus,
            voluptatem soluta porro numquam neque qui maxime. Id suscipit fuga
            cum non.`
           },
           {
            number:2,
            title:'ela da vidish ti',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            quo placeat et dolore quis blanditiis unde minima minus,
            voluptatem soluta porro numquam neque qui maxime. Id suscipit fuga
            cum non.`
           },
           {
            number:2,
            title:'ela da vidish ti',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            quo placeat et dolore quis blanditiis unde minima minus,
            voluptatem soluta porro numquam neque qui maxime. Id suscipit fuga
            cum non.`
           }

        ]
      }></How> */}
      <Step
                    number={1}
                    title={"ela da vidish ti"}
                    description= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
                    quo placeat et dolore quis blanditiis unde minima minus,
                    voluptatem soluta porro numquam neque qui maxime. Id suscipit fuga
                    cum non."
                  ></Step>
    </div>
  );

}