import Button from "../button/button.components";
import Toggle from "../toggle/toggle.component";

import "./card.styles.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__title">
        <img src="./images/back.svg" alt="back" />
        <h3>Cards</h3>
        <Toggle />
      </div>
      <div className="card__heading">
        <div className="head">
          <img src="./images/card-icon.svg" alt="card icon" />

          <div>
            <h2>
              Virtual Card &nbsp;
              <img src="./images/dropdown.svg" alt="" />
            </h2>
            <p>Lorem Ipsum dolor sit amet</p>
          </div>
        </div>
        <Button text="Create New Card" styles="yellow-card" />
      </div>
      <div className="card__images">
        <img
          src="./images/patricia-card.svg"
          alt="Patricia card"
          className="patricia-card"
        />
        <img
          src="./images/blurred-card.svg"
          alt="card"
          className="blurred-card"
        />
      </div>
      <div>
        <div className="buttons">
          <Button text="Freeze Card" styles="green-card" />
          <Button text="Delete Card" styles="red-card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
