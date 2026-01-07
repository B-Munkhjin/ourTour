"use client";

import { useState } from "react";
export default function home() {
  const [tour, setTour] = useState(obj);
  const notIntrested = (id) => {
    const update = tour.filter((el) => el.id !== id);
    setTour(update);
  };
  const onReset = () => {
    setTour(obj);
  };
  return (
    <div className="justify-items-center mb-15">
      <div className="text-sky-800 text-5xl pb-15 pt-15 text-center  ">
        Available Tours
      </div>
      <div className="flex justify-center items-center">
        <div className="text-green-800 text-5xl border-b-6 w-60 rounded-2xl "></div>
      </div>
      <div className="grid grid-cols-1 gap-y-10 justify-items-center pt-15 gap-x-25 lg:grid-cols-3 sm:grid-cols-2">
        {tour.map(({ id, img, tourName, price, content }) => (
          <Item
            key={id}
            tourName={tourName}
            img={img}
            price={price}
            content={content}
            onClick={notIntrested}
            id={id}
          ></Item>
        ))}
        {tour.length === 0 && (
          <button
            className="w-80 h-15 border-3 text-xl border-sky-700 text-sky-700 rounded-2xl col-start-2  hover:bg-sky-700 hover:text-white"
            onClick={onReset}
          >
            Do you want to see again?
          </button>
        )}
      </div>
    </div>
  );
}

const obj = [
  {
    id: 1,
    img: "/switzerland.jpg",
    price: "7000",
    tourName: "Switzerland Hiking & Walking Tours ",
    content:
      "If you’re looking for a scenic walking tour of Switzerland that includes Zürich, Lake Lucerne, and the best of the Swiss Alps, look no further! From the moment you meet your expert leaders in Zürich, you’ll be immersed in the alpine spirit—enjoying an enchanting boat ride on Lake Lucerne, then traveling by train, gondola, and cog rail past the famous peaks of Jungfrau, Mönch, and Eiger. Hike along rugged mountain ridges, stopping to appreciate sparkling waterfalls and fields of edelweiss and gentian—and perhaps spotting the hardy alpine chamois and whistling marmots that forage among these rocky slopes. ",
  },
  {
    id: 2,
    img: "/Louvre-Paris.jpg",
    price: "6700",
    tourName: "Discovering France-Paris | Louvre ",
    content:
      "Explore the timeless elegance of Paris, where art, history, and romance meet. A visit to the Louvre places you at the heart of the world’s largest and most celebrated museum, home to masterpieces like the Mona Lisa and the Venus de Milo. Stroll through grand galleries, admire the iconic glass pyramid, and soak in centuries of culture before stepping back into the charming streets of Paris, lined with cafés, bridges, and unforgettable views of the Seine. ",
  },
  {
    id: 3,
    img: "/fuji.webp",
    price: "4700",
    tourName: "Japan Mountain-Fuji ",
    content:
      "Mount Fuji, Japan’s most iconic natural landmark, offers a breathtaking blend of spiritual significance and natural beauty. Rising gracefully above lakes, forests, and traditional villages, this sacred mountain is a symbol of harmony and resilience. Whether viewed during cherry blossom season or capped with snow, Mount Fuji provides unforgettable scenery, cultural insight, and a deep connection to Japan’s traditions and landscapes.",
  },
  {
    id: 4,
    img: "/cuba.jpg",
    price: "4700",
    tourName: "Cuba El-Malecon Havana ",
    content:
      "El Malecón is the vibrant soul of Havana, stretching along the coastline with sweeping ocean views and colorful city life. This historic seaside boulevard is where classic cars roll by, locals gather at sunset, and music fills the air. Walking along El Malecón offers a true taste of Cuba’s rhythm, blending colonial architecture, Caribbean charm, and the lively spirit of Havana. ",
  },
  {
    id: 5,
    img: "/italy.jpeg",
    price: "7000",
    tourName: " Italy | Venice, a city under Water ",
    content:
      "Venice, often called the city under water, is a magical destination built on canals instead of roads. Gondolas glide past historic palaces, bridges, and hidden squares, creating a dreamlike atmosphere unlike anywhere else in the world. With its rich maritime history, romantic ambiance, and unique architecture rising from the lagoon, Venice offers an unforgettable journey through art, history, and water-bound beauty. ",
  },
];
export const Item = ({ img, price, tourName, content, onClick, id }) => {
  // console.log("notIntrested", onClick);
  const [isShow, setShow] = useState(false);
  let newContent = !isShow ? `${content.slice(0, 300)}... ` : content;
  const more = () => {
    setShow(true);
  };
  const less = () => {
    setShow(false);
  };
  console.log(more);

  return (
    <div className="w-85 h-min bg-white text-green-700 rounded-2xl shadow-xl/20">
      <div className="h-58">
        <img src={img} className="w-85 h-55 rounded-t-2xl" />
        <p className="w-20 text-center h-vh relative bottom-55 left-65 text-white text-2xl bg-sky-700 rounded-tr-lg">
          {price}$
        </p>
      </div>
      <h1 className="pl-4 pb-2 text-xl">{tourName}</h1>
      <h2 className="text-gray-600 pl-4 pr-4 ">
        {newContent}
        {isShow ? (
          <button
            className="text-sky-600 w-20 hover:text-green-600 ml-1"
            onClick={less}
          >
            show less
          </button>
        ) : (
          <button
            className="text-sky-600 w-20 hover:text-green-600 ml-1"
            onClick={more}
          >
            show more
          </button>
        )}
      </h2>
      <div className="flex justify-center items-center pb-4 pt-2">
        <button
          onClick={() => onClick(id)}
          className=" w-78 border border-red-600 h-10 rounded-2xl hover:bg-red-600 hover:text-white text-red-700"
        >
          Not Intrested
        </button>
      </div>
    </div>
  );
};
