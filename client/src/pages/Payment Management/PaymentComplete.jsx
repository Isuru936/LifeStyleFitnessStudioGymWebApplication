import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentCompleteGif from "../../assets/payment-complete.gif";

function PaymentComplete() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/payment-details"); // Replace "/new-url" with your desired URL
    }, 3900);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="bg-slate-0 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src={paymentCompleteGif}
          alt="Payment Complete"
          onLoad={(event) => {
            event.target.style.animationIterationCount = "1"; // Play the animation only once
          }}
        />
        <p>Payment Successful</p>
      </div>
    </div>
  );
}

export default PaymentComplete;
