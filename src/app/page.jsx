"use client";

import { useState } from "react";
export default function home() {
  const [tour, setTour] = useState(obj);
  const notIntrested = (id) => {
    const update = tour.filter((el) => el.id !== id);
    setTour(update);
  };
  return (
    <div className="justify-items-center">
      <div className="text-green-800 text-5xl pb-10 pt-5 text-center  ">
        Available Tours
      </div>
      <div className="flex justify-center items-center">
        <div className="text-green-800 text-5xl border-b-6 w-60 rounded-2xl "></div>
      </div>
      <div className="grid grid-cols-3 gap-y-10 justify-items-center pt-10 gap-x-25">
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
      "If you’re looking for a scenic walking tour of Switzerland that includes Zürich, Lake Lucerne, and the best of the Swiss Alps, look no further! From the moment you meet your expert leaders in Zürich, you’ll be immersed in the alpine spirit—enjoying an enchanting boat ride on Lake Lucerne, then traveling by train, gondola, and cog rail past the famous peaks of Jungfrau, Mönch, and Eiger.",
  },
  {
    id: 2,
    img: "/switzerland.jpg",
    price: "7000",
    tourName: "Switzerland Hiking & Walking Tours ",
    content:
      "If you’re looking for a scenic walking tour of Switzerland that includes Zürich, Lake Lucerne, and the best of the Swiss Alps, look no further! From the moment you meet your expert leaders in Zürich, you’ll be immersed in the alpine spirit—enjoying an enchanting boat ride on Lake Lucerne, then traveling by train, gondola, and cog rail past the famous peaks of Jungfrau, Mönch, and Eiger. ",
  },
  {
    id: 3,
    img: "/switzerland.jpg",
    price: "7000",
    tourName: "Switzerland Hiking & Walking Tours ",
    content:
      "If you’re looking for a scenic walking tour of Switzerland that includes Zürich, Lake Lucerne, and the best of the Swiss Alps, look no further! From the moment you meet your expert leaders in Zürich, you’ll be immersed in the alpine spirit—enjoying an enchanting boat ride on Lake Lucerne, then traveling by train, gondola, and cog rail past the famous peaks of Jungfrau, Mönch, and Eiger.",
  },
  {
    id: 4,
    img: "/switzerland.jpg",
    price: "7000",
    tourName: "Switzerland Hiking & Walking Tours ",
    content:
      "If you’re looking for a scenic walking tour of Switzerland that includes Zürich, Lake Lucerne, and the best of the Swiss Alps, look no further! From the moment you meet your expert leaders in Zürich, you’ll be immersed in the alpine spirit—enjoying an enchanting boat ride on Lake Lucerne, then traveling by train, gondola, and cog rail past the famous peaks of Jungfrau, Mönch, and Eiger. ",
  },
  {
    id: 5,
    img: "/switzerland.jpg",
    price: "7000",
    tourName: "Switzerland Hiking & Walking Tours ",
    content:
      "If you’re looking for a scenic walking tour of Switzerland that includes Zürich, Lake Lucerne, and the best of the Swiss Alps, look no further! From the moment you meet your expert leaders in Zürich, you’ll be immersed in the alpine spirit—enjoying an enchanting boat ride on Lake Lucerne, then traveling by train, gondola, and cog rail past the famous peaks of Jungfrau, Mönch, and Eiger. ",
  },
];
export const Item = ({ img, price, tourName, content, onClick, id }) => {
  // console.log("notIntrested", onClick);

  return (
    <div className="w-85 h-vh bg-white text-green-700 rounded-2xl ">
      <div className="h-58">
        <img src={img} className="w-85 h-55 rounded-t-2xl" />
        <p className="w-20 text-center h-vh relative bottom-55 left-65 text-white text-2xl bg-green-600 rounded-xl">
          {price}$
        </p>
      </div>
      <h1 className="pl-4 pb-2 text-xl">{tourName}</h1>
      <h2 className="text-gray-600 pl-4 pr-4">{content}</h2>
      <div className="flex justify-center items-center pb-4 pt-2">
        <button
          onClick={() => onClick(id)}
          className=" w-78 border border-green-600 h-10 rounded-2xl hover:bg-green-600 hover:text-white "
        >
          Not Intrested
        </button>
      </div>
    </div>
  );
};
