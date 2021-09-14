import "./activity.styles.scss";

import { useState } from "react";

const Activity = () => {
  const [infos, setInfos] = useState([
    {
      id: 1,
      text: "Amazon",
      date: "Just now",
      price: 377.23,
      image: "./images/amazon.svg",
    },
    {
      id: 2,
      text: "Nike",
      date: "Today",
      price: 237737.55,
      image: "./images/nike.svg",
    },
    {
      id: 3,
      text: "Starbucks",
      date: "Yesterday",
      price: 873873834.3,
      image: "./images/starbucks.svg",
    },
    {
      id: 4,
      text: "Netflix",
      date: "June 17",
      price: 599,
      image: "./images/netflix.svg",
    },
    {
      id: 5,
      text: "Apple",
      date: "June 15",
      price: 872,
      image: "./images/icon.svg",
    },
    {
      id: 6,
      text: "Starbucks",
      date: "June 13",
      price: 452,
      image: "./images/starbucks.svg",
    },
    {
      id: 7,
      text: "Nike",
      date: "June 11",
      price: 452,
      image: "./images/nike.svg",
    },
    {
      id: 8,
      text: "Apple",
      date: "June 09",
      price: 990,
      image: "./images/apple.svg",
    },
  ]);
  return (
    <div className="activity">
      <div className="profile">
        <img src="./images/notif.svg" alt="notification" />
        <img src="./images/user.svg" alt="user" />
        <img src="./images/dots.svg" alt="dots" />
      </div>
      <div className="activities">
        <div className="platform__head">
          <p>Recent Activity</p>
          <div className="date">
            <p>
              <img src="./images/calendar.svg" alt="" />
              &nbsp; Start date: 01/02/21
            </p>
            <img src="./images/download.svg" alt="" />
          </div>
        </div>
        {infos.map((info) => (
          <div key={info.id} className="platform">
            <div className="platform__details">
              <div className="platform__icon">
                <img src={info.image} alt={info.text} />
              </div>
              <div className="platform__name">
                <h5>{info.text}</h5>
                <small>{info.date}</small>
              </div>
            </div>
            <div className="platform__price">
              <h6>${info.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
