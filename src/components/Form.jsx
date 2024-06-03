import PropTypes from "prop-types";

const Form = ({
  cardNumber,
  cardName,
  cardExpiresMonth,
  cardExpiresYear,
  cardCvc,
  setCardName,
  setCardNumber,
  setCardExpiresMonth,
  setCardExpiresYear,
  setCardCvc,
  setIsSubmitted,
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

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   // Ensure the value is a number and between 1 and 12
  //   if (/^(0?[1-9]|1[0-2])$/.test(value) || value === "") {
  //     setCardExpiresMonth(value);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setCardCvc("");
    setCardName("");
    setCardNumber("");
    setCardExpiresMonth("");
    setCardExpiresYear("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-name">Cardholder Name</label>
        <input
          autoComplete="cc-name"
          type="text"
          name="card-name"
          id="card-name"
          // onFocus={() => setCardName("")}
          onChange={handleCardName}
          pattern="[a-zA-Z\s]*"
          placeholder="Jane Doe"
          inputMode="text"
          // onInput={handleInputChange}
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
          maxLength="19"
          placeholder="xxxx xxxx xxxx xxxx"
          // onFocus={() => setCardNumber("")}
          onChange={handleCardNumber}
          value={cardNumber}
          required
        />
        <div className="input-group">
          <div className="input-group__expires">
            <div className="month">
              <label htmlFor="card-expires-month">MM</label>
              <input
                type="tel"
                name="card-expires-month"
                id="card-expires-month"
                inputMode="numeric"
                pattern="0?[1-9]|1[0-2]"
                autoComplete="cc-expires-month"
                maxLength="2"
                onChange={handleCardExpiresMonth}
                // onInput={handleInputChange}
                placeholder="01"
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
                pattern="25|26|27|28|29|30"
                autoComplete="cc-expires-year"
                maxLength="2"
                onChange={handleCardExpiresYear}
                placeholder="01"
                value={cardExpiresYear}
                required
              />
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="card-cvc">CVC</label>
            <input
              type="tel"
              name="card-cvc"
              id="card-cvc"
              inputMode="numeric"
              maxLength="3"
              pattern="[0-9\s]{3,4}"
              autoComplete="cc-cvc"
              onChange={handleCardCvc}
              placeholder="012"
              value={cardCvc}
              required
            />
          </div>
        </div>

        <button type="submit">Confirm</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardExpiresMonth: PropTypes.string,
  cardExpiresYear: PropTypes.string,
  cardCvc: PropTypes.string,
  setCardName: PropTypes.func,
  setCardNumber: PropTypes.func,
  setCardExpiresMonth: PropTypes.func,
  setCardExpiresYear: PropTypes.func,
  setCardCvc: PropTypes.func,
  setIsSubmitted: PropTypes.func,
};

export default Form;
