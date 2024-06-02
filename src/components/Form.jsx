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
  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
    const inputVal = e.target.value.replace(/ /g, ""); //remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits

    if (inputNumbersOnly.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); // Join all the splits with an empty space
    }

    setCardNumber(spacedNumber); // Set the new CC number
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
          // pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="19"
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
              inputMode="numeric"
              // pattern="([0-9]|[0-9])"
              autoComplete="cc-expires-month"
              maxLength="2"
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
              inputMode="numeric"
              // pattern="([0-9]|[0-9])"
              autoComplete="cc-expires-year"
              maxLength="2"
              onChange={handleCardExpiresYear}
              value={cardExpiresYear}
              required
            />
          </div>
        </div>
        <label htmlFor="card-cvc">CVC</label>
        <input
          type="tel"
          name="card-cvc"
          id="card-cvc"
          inputMode="numeric"
          maxLength="3"
          // pattern="([0-9]|[0-9]|[0-9])"
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
