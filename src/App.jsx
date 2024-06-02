import { useState } from "react";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";
import Success from "./components/Success";

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiresMonth, setCardExpiresMonth] = useState("");
  const [cardExpiresYear, setCardExpiresYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className="container">
        <CreditCard
          cardNumber={cardNumber}
          cardName={cardName}
          cardExpiresMonth={cardExpiresMonth}
          cardExpiresYear={cardExpiresYear}
          cardCvc={cardCvc}
        />
        {isSubmitted ? (
          <Success />
        ) : (
          <Form
            cardNumber={cardNumber}
            cardName={cardName}
            cardExpiresMonth={cardExpiresMonth}
            cardExpiresYear={cardExpiresYear}
            cardCvc={cardCvc}
            setCardNumber={setCardNumber}
            setCardName={setCardName}
            setCardExpiresMonth={setCardExpiresMonth}
            setCardExpiresYear={setCardExpiresYear}
            setCardCvc={setCardCvc}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </div>
    </>
  );
};

export default App;
