import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../../shared/context/auth.context";
import Toast from "../../shared/toast/Toast";
import { useLocation, useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  useEffect(() => {
    if (number4 !== "") {
      submithandler();
    }
  }, [number4]);

  const handleInputChange = (value, setter, nextInputRef) => {
    setter(value);
    if (value.length === 1 && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  const submithandler = () => {
    const checkotp = parseInt(number1 + number2 + number3 + number4);
    if (checkotp === Auth.otp) {
      Toast("Verification Successfull ", "success");
      console.log(location.state.email);
      const email = location.state.email;
      navigate("/new-password", { replace: true, state: { email } });
    } else {
      Toast("Invalid OTP ", "error");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {location.state.email}</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <div className="w-16 h-16">
                  <input
                    ref={null}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="number"
                    min={0}
                    max={9}
                    value={number1}
                    onChange={(e) =>
                      handleInputChange(e.target.value, setNumber1, input2Ref)
                    }
                  />
                </div>
                <div className="w-16 h-16">
                  <input
                    ref={input2Ref}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="number"
                    min={0}
                    max={9}
                    value={number2}
                    onChange={(e) =>
                      handleInputChange(e.target.value, setNumber2, input3Ref)
                    }
                  />
                </div>
                <div className="w-16 h-16">
                  <input
                    ref={input3Ref}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="number"
                    min={0}
                    max={9}
                    value={number3}
                    onChange={(e) =>
                      handleInputChange(e.target.value, setNumber3, input4Ref)
                    }
                  />
                </div>
                <div className="w-16 h-16">
                  <input
                    ref={input4Ref}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="number"
                    min={0}
                    max={9}
                    value={number4}
                    onChange={(e) => setNumber4(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button
                    onClick={submithandler}
                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-orange-500 border-none text-white text-sm shadow-sm"
                  >
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive code?</p>{" "}
                  <a
                    className="flex flex-row items-center text-blue-600"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
