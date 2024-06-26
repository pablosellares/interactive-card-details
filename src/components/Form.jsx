import PropTypes from "prop-types";
import { useState } from "react";

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
  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiresMonth: "",
    cardExpiresYear: "",
    cardCvc: "",
  });

  const validateCardName = (name) => {
    if (!name) {
      return "Cardholder name is required.";
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      return "Cardholder name can only contain letters and spaces.";
    }
    return "";
  };

  const validateCardNumber = (number) => {
    if (!number) {
      return "Card number is required.";
    } else if (!/^[0-9\s]{13,19}$/.test(number)) {
      return "Card number must be between 13 and 19 digits.";
    }
    return "";
  };

  const validateCardExpiresMonth = (month) => {
    if (!month) {
      return "Expiration month is required.";
    } else if (!/^(0?[1-9]|1[0-2])$/.test(month)) {
      return "Expiration month must be between 01 and 12.";
    }
    return "";
  };

  const validateCardExpiresYear = (year) => {
    if (!year) {
      return "Expiration year is required.";
    } else if (!/^(25|26|27|28|29|30)$/.test(year)) {
      return "Expiration year must be between 25 and 30.";
    }
    return "";
  };

  const validateCardCvc = (cvc) => {
    if (!cvc) {
      return "CVC is required.";
    } else if (!/^[0-9\s]{3,4}$/.test(cvc)) {
      return "CVC must be 3 or 4 digits.";
    }
    return "";
  };

  const handleCardName = (e) => {
    const name = e.target.value;
    setCardName(name);
    setErrors({ ...errors, cardName: validateCardName(name) });
  };

  const handleCardNumber = (e) => {
    const number = e.target.value;
    setCardNumber(number);
    setErrors({ ...errors, cardNumber: validateCardNumber(number) });
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
    const month = e.target.value;
    setCardExpiresMonth(month);
    setErrors({ ...errors, cardExpiresMonth: validateCardExpiresMonth(month) });
  };

  const handleCardExpiresYear = (e) => {
    const year = e.target.value;
    setCardExpiresYear(year);
    setErrors({ ...errors, cardExpiresYear: validateCardExpiresYear(year) });
  };

  const handleCardCvc = (e) => {
    const cvc = e.target.value;
    setCardCvc(cvc);
    setErrors({ ...errors, cardCvc: validateCardCvc(cvc) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateCardName(cardName);
    const numberError = validateCardNumber(cardNumber);
    const monthError = validateCardExpiresMonth(cardExpiresMonth);
    const yearError = validateCardExpiresYear(cardExpiresYear);
    const cvcError = validateCardCvc(cardCvc);

    if (nameError || numberError || monthError || yearError || cvcError) {
      setErrors({
        cardName: nameError,
        cardNumber: numberError,
        cardExpiresMonth: monthError,
        cardExpiresYear: yearError,
        cardCvc: cvcError,
      });
      return;
    }

    setIsSubmitted(true);
    setCardName("");
    setCardNumber("");
    setCardExpiresMonth("");
    setCardExpiresYear("");
    setCardCvc("");
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
          onChange={handleCardName}
          pattern="[a-zA-Z\s]*"
          placeholder="Felicia Leire"
          inputMode="text"
          value={cardName}
          required
        />
        {errors.cardName && <span className="error">{errors.cardName}</span>}

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
          onChange={handleCardNumber}
          value={cardNumber}
          required
        />
        {errors.cardNumber && (
          <span className="error">{errors.cardNumber}</span>
        )}

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
                placeholder="MM"
                value={cardExpiresMonth}
                required
              />
              {errors.cardExpiresMonth && (
                <span className="error">{errors.cardExpiresMonth}</span>
              )}
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
                placeholder="YY"
                value={cardExpiresYear}
                required
              />
              {errors.cardExpiresYear && (
                <span className="error">{errors.cardExpiresYear}</span>
              )}
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
              placeholder="e.g. 123"
              value={cardCvc}
              required
            />
            {errors.cardCvc && <span className="error">{errors.cardCvc}</span>}
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
