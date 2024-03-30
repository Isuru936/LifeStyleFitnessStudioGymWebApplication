import React, { useState } from "react";
import "./style/AddCard.css";
import chip from "../../assets/chip.png";
import visa from "../../assets/visa.png";
import { Link } from "react-router-dom";

function AddCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [cvv, setCvv] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    document.querySelector(".card-number-box").innerText = event.target.value;
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
    document.querySelector(".card-holder-name").innerText = event.target.value;
  };

  const handleExpirationMonthChange = (event) => {
    setExpirationMonth(event.target.value);
    document.querySelector(".exp-month").innerText = event.target.value;
  };

  const handleExpirationYearChange = (event) => {
    setExpirationYear(event.target.value);
    document.querySelector(".exp-year").innerText = event.target.value;
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    document.querySelector(".cvv-box").innerText = event.target.value;
  };

  const handleCvvMouseEnter = () => {
    setIsFlipped(true);
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };

  const handleCvvMouseLeave = () => {
    setIsFlipped(false);
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  };

  return (
    <div className="full">
      <div className="container h-screen bg-[#212121] flex flex-col align-middle mx-auto pb-16 w-screen pt-10">
        <div
          className={`card-container bg-[#212121] ${
            isFlipped ? "flipped" : ""
          }`}
        >
          <div className="front">
            <div className="image">
              <img src={chip} alt="" />
              <img src={visa} alt="" />
            </div>
            <div className="card-number-box">{cardNumber}</div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">{cardHolder}</div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">{expirationMonth}</span>
                  <span className="exp-year">{expirationYear}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box"></div>
              <img src={visa} alt="" />
            </div>
          </div>
        </div>
        <form
          action=""
          className="bg-gradient-to to-black   rounded-lg shadow-md p-5 w-[400px] pt-[160px] mx-auto"
        >
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength="16"
              className="card-number-input w-fit"
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              className="card-holder-input"
              onChange={handleCardHolderChange}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                name=""
                id=""
                className="month-input"
                onChange={handleExpirationMonthChange}
                defaultValue="Month"
              >
                <option value="Month" disabled>
                  Month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                name=""
                id=""
                className="year-input"
                onChange={handleExpirationYearChange}
                defaultValue="Year"
              >
                <option value="Year" disabled>
                  Year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="text"
                maxLength="4"
                className="cvv-input mt-5"
                onMouseEnter={handleCvvMouseEnter}
                onMouseLeave={handleCvvMouseLeave}
                onChange={handleCvvChange}
              />
            </div>
          </div>
          <Link to="/payment-review">
            <input type="submit" value="submit" className="submit-btn" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
