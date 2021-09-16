import Button from "../button/button.components";
import "./card-details.styles.scss";

const CardDetails = () => {
  const details = [
    {
      balance: 3000.73,
      cardName: "Netflix Card",
      status: "Active",
      address: "Patricia HQ, SA 109827",
      date: "March 3rd 2020, 9:48:36 am",
    },
  ];
  return (
    <>
      <div className="card__info">
        {details.map((detail, idx) => (
          <div className="card__info__details" key={idx}>
            <div className="bal">
              <p>Card Balance: </p>
              <h6>${detail.balance}</h6>
            </div>
            <div className="name">
              <p>Name: </p>
              <h6>{detail.cardName}</h6>
            </div>
            <div className="status">
              <p>Card Status: </p>
              <h6>{detail.status}</h6>
            </div>
            <div className="address">
              <p>Billing Address: </p>
              <h6>
                {detail.address}
                &nbsp;
                <img src="./images/copy.svg" alt="copy" />
              </h6>
            </div>
            <div className="date">
              <p>Date Created: </p>
              <h6>{detail.date}</h6>
            </div>
          </div>
        ))}
        <Button text="Fund Card" styles="green-btn" />
      </div>
    </>
  );
};

export default CardDetails;
