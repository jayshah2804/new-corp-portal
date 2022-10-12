import React from "react";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import ConfirmPassword from "./ConfirmPassword";

let buttonValue = "Send OTP";
const ForgotPassword = (props) => {
  const [isSendOtpClicked, setIsSendOtpClicked] = useState();
  const [isVerifyClicked, setIsVerifyClicked] = useState();

  const sendOtpClickHandler = () => {
    if (buttonValue === "Verify") {
      setIsVerifyClicked(true);
      buttonValue = "Send OTP";
    } else {
      buttonValue = "Verify";
      setIsSendOtpClicked(true);
    }
  };
  const backClickHandler = () => {
    if (buttonValue === "Send OTP") {
      props.forgotPassword(false);
    } else if (buttonValue === "Verify") {
      setIsVerifyClicked(false);
      setIsSendOtpClicked(false);
      buttonValue = "Send OTP";
    }
  };
  return (
    <div>
      <MdArrowBack
        style={{
          marginLeft: "-100px",
          fontSize: "20px",
          border: "1px solid black",
          borderRadius: "50%",
          padding: "3px",
          cursor: "pointer",
        }}
        onClick={backClickHandler}
      />
      {!isVerifyClicked && (
        <div id="form">
          <input
            type="text"
            placeholder="Enter Your Registered Email"
            id="input"
          />
          {isSendOtpClicked && (
            <input type="number" placeholder="Enter OTP" id="input" />
          )}
          <input
            type="submit"
            value={buttonValue}
            id="loginButton"
            onClick={sendOtpClickHandler}
          />
        </div>
      )}
      {isVerifyClicked && (
        <ConfirmPassword forgotPassword={props.forgotPassword} />
      )}
    </div>
  );
};

export default ForgotPassword;
