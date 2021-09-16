import "./activity.styles.scss";
import activities from "../../data/activities.json";

const Activity = () => {
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
        {activities.map((activity) => (
          <div key={activity.id} className="platform">
            <div className="platform__details">
              <img
                src={activity.image}
                alt={activity.text}
                className="platform__icon"
              />

              <div className="platform__name">
                <h5>{activity.text}</h5>
                <small>{activity.date}</small>
              </div>
            </div>
            <div className="platform__price">
              <h6>${activity.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
