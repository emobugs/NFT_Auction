import Example from "../src/components/example/Example";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/card/Card";
import How from "../src/components/how/How";
import Step from "../src/components/how/Step";
// import Featured from "../src/components/featured/Featured";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import TopCollectors from "../src/components/collectors/TopCollectors";
import Trending from "../src/components/trending/Trending";

export default function Index() {
  return (
    <div>

      <Trending></Trending>
    <TopCollectors collectors= {
      [
        {
          name: 'emo',
          nftsCount: 120,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'ivan',
          nftsCount: 32,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'sasho',
          nftsCount: 20,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'emo',
          nftsCount: 120,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'ivan',
          nftsCount: 32,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'sasho',
          nftsCount: 20,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'emo',
          nftsCount: 120,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'ivan',
          nftsCount: 32,
          avatar: './images/avatar.png',
          verified: true,
        },
        {
          name: 'sasho',
          nftsCount: 20,
          avatar: './images/avatar.png',
          verified: true,
        },
      ]
    }></TopCollectors>
      {/* <CollectorColumn
        items={[
          {
            name: "emo",
            nftsCount: 155,
            avatar: "./images/avatar.png",
            verified: true,
            id: 1,
          },
          {
            name: 'ivan',
            nftsCount: 25,
            avatar: './images/avatar.png',
            verified: true,
            id: 2
          },
          {
            name: 'Sasho',
            nftsCount: 6,
            avatar: './images/avatar.png',
            verified: true,
            id: 3
          }
        ]}
      ></CollectorColumn> */}
      {/* <Featured items = {
        [
          {
            image:
              "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
            title: "Breakfast",
            rows: 2,
            cols: 3,
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
            title: "Burger",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
            title: "Camera",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
            title: "Coffee",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
            title: "Hats",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
            title: "Honey",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
            title: "Basketball",
            href: "/about",
          },
        ]
      }></Featured> */}
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
      {/* <Step
                    number={1}
                    title={"ela da vidish ti"}
                    description= {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
                    quo placeat et dolore quis blanditiis unde minima minus,
                    voluptatem soluta porro numquam neque qui maxime. Id suscipit fuga
                    cum non.`}
                  > </Step> */}
    </div>
  );
}
