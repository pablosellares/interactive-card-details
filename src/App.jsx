import { useState } from "react";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiresMonth, setCardExpiresMonth] = useState("");
  const [cardExpiresYear, setCardExpiresYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");

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
        />
      </div>
    </>
  );
};

export default App;
