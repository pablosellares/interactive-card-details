import PropTypes from "prop-types";
import cardBackImg from "../assets/bg-card-back.png";
import cardFrontImg from "../assets/bg-card-front.png";
import cardLogoImg from "../assets/card-logo.svg";

const CreditCard = ({
  cardNumber,
  cardName,
  cardExpiresMonth,
  cardExpiresYear,
  cardCvc,
}) => {
  return (
    <section className="card">
      <div className="card-back_wrapper">
        <img src={cardBackImg} alt="" />
        <div className="card-back">
          <span className="card-front_expires">{cardCvc}</span>
        </div>
      </div>

      <div className="card-front_wrapper">
        <img src={cardFrontImg} alt="" />
        <div className="card-front">
          <img className="card-logo" src={cardLogoImg} alt="" />
          <span className="card-front_number">{cardNumber}</span>
          <span className="card-front_name">{cardName}</span>
          <div className="card-expire-date">
            <span className="card-front_expires-month">{cardExpiresMonth}</span>
            {cardExpiresMonth ? <span>/</span> : ""}

            <span className="card-front_expires-year">{cardExpiresYear}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

CreditCard.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardExpiresMonth: PropTypes.string,
  cardExpiresYear: PropTypes.string,
  cardCvc: PropTypes.string,
};

export default CreditCard;
