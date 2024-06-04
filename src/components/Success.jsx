import iconCompleteImg from "../assets/icon-complete.svg";

const Success = () => {
  return (
    <section className="success">
      <img src={iconCompleteImg} className="success-img" alt="" />
      <h1 className="success-title">Thank You!</h1>
      <p className="success-paragraph">We've added your credit card details</p>
      <form>
        <button type="submit" className="success-btn">
          Continue
        </button>
      </form>
    </section>
  );
};

export default Success;
