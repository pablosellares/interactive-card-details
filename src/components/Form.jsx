import { useState } from "react";

const Form = ({
  cardNumber,
  cardName,
  cardExpiresMonth,
  cardExpiresYear,
  cardCvc,
  setCardNumber,
  setCardName,
  setCardExpiresMonth,
  setCardExpiresYear,
  setCardCvc,
}) => {
  const [cardNameValue, setCardNameValue] = useState("");

  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardExpiresMonth = (e) => {
    setCardExpiresMonth(e.target.value);
  };

  const handleCardExpiresYear = (e) => {
    setCardExpiresYear(e.target.value);
  };

  const handleCardCvc = (e) => {
    setCardCvc(e.target.value);
  };

  return (
    <section className="form">
      <form>
        <label htmlFor="card-name">Cardholder Name</label>
        <input
          autoComplete="cc-name"
          type="text"
          name="card-name"
          id="card-name"
          onChange={handleCardName}
          value={cardName}
          required
        />
        <label htmlFor="card-number">Card Number</label>
        <input
          type="tel"
          name="card-number"
          id="card-number"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="16"
          placeholder="xxxx xxxx xxxx xxxx"
          onChange={handleCardNumber}
          value={cardNumber}
          required
        />
        <div className="input-group">
          <div className="month">
            <label htmlFor="card-expires-month">MM</label>
            <input
              type="tel"
              name="card-expires-month"
              id="card-expires-month"
              // pattern="([0-9]|[0-9])"
              autoComplete="cc-expires-month"
              onChange={handleCardExpiresMonth}
              value={cardExpiresMonth}
              required
            />
          </div>
          <div className="year">
            <label htmlFor="card-expires-year">YY</label>
            <input
              type="tel"
              name="card-expires-year"
              id="card-expires-year"
              // pattern="([0-9]|[0-9])"
              autoComplete="cc-expires-year"
              onChange={handleCardExpiresYear}
              value={cardExpiresYear}
              required
            />
          </div>
        </div>
        <label htmlFor="card-cvc">CVC</label>
        <input
          type="number"
          name="card-cvc"
          id="card-cvc"
          inputMode="numeric"
          maxLength={3}
          pattern="([0-9]|[0-9]|[0-9])"
          autoComplete="cc-cvc"
          onChange={handleCardCvc}
          value={cardCvc}
          required
        />
        <button type="submit">Confirm</button>
      </form>
    </section>
  );
};

export default Form;
