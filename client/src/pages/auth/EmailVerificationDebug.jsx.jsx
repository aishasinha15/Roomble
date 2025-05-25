import React, { useState, useEffect } from "react";
import axios from "axios";

// This is a standalone debug component just for testing email verification
const EmailVerificationDebug = () => {
  // Track when component mounts
  useEffect(() => {
    console.log("EmailVerificationDebug component mounted");
  }, []);

  // Initial form data
  const [email, setEmail] = useState("");

  // Simple verification state to avoid any potential issues
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Track state changes
  useEffect(() => {
    console.log("State updated:", {
      email,
      isLoading,
      showOtpInput,
      otpValue,
      errorMsg,
      isVerified,
    });
  }, [email, isLoading, showOtpInput, otpValue, errorMsg, isVerified]);

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMsg("");
  };

  // Handle OTP input changes
  const handleOtpChange = (e) => {
    setOtpValue(e.target.value);
    setErrorMsg("");
  };

  // Send email OTP - simplified for debugging
  const sendOtp = async () => {
    console.log("Sending OTP to email:", email);

    if (!email) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(
        "http://localhost:5001/api/reqOTPEmail",
        { email },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("API response:", response);

      setIsLoading(false);
      setShowOtpInput(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setIsLoading(false);
      setErrorMsg("Failed to send code. Please try again.");
    }
  };

  // Verify OTP - simplified for debugging
  const verifyOtp = async () => {
    console.log("Verifying OTP:", otpValue);

    if (!otpValue) {
      setErrorMsg("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(
        "http://localhost:5001/api/verifyOTPEmail",
        {
          email,
          otp: otpValue,
        }
      );

      console.log("Verify response:", response);

      if (response.data.message === "OTP verified") {
        setIsVerified(true);
        setShowOtpInput(false);
        setErrorMsg("");
      } else {
        setErrorMsg("Invalid verification code");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setIsLoading(false);
      setErrorMsg("Verification failed");
    }
  };

  // Resend OTP - simplified for debugging
  const resendOtp = async () => {
    console.log("Resending OTP");
    setOtpValue("");
    setIsLoading(true);
    setErrorMsg("");

    try {
      await axios.post("http://localhost:5001/api/reqOTPEmail", { email });

      setIsLoading(false);
      setErrorMsg("New code sent!");
    } catch (error) {
      console.error("Error resending OTP:", error);
      setIsLoading(false);
      setErrorMsg("Failed to resend code");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Email Verification Debug</h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <div style={{ display: "flex" }}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            disabled={isVerified}
            style={{
              flex: "1",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          {isVerified ? (
            <button
              disabled
              style={{
                marginLeft: "10px",
                padding: "8px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Verified ✓
            </button>
          ) : (
            <button
              onClick={sendOtp}
              disabled={isLoading || !email}
              style={{
                marginLeft: "10px",
                padding: "8px 15px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          )}
        </div>
      </div>

      {showOtpInput && !isVerified && (
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            OTP Code:
          </label>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={otpValue}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              style={{
                flex: "1",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />

            <button
              onClick={verifyOtp}
              disabled={isLoading || !otpValue}
              style={{
                marginLeft: "10px",
                padding: "8px 15px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </div>

          <button
            onClick={resendOtp}
            disabled={isLoading}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            Resend OTP
          </button>
        </div>
      )}

      {errorMsg && (
        <div
          style={{
            color: errorMsg.includes("sent") ? "#4CAF50" : "#f44336",
            marginTop: "10px",
          }}
        >
          {errorMsg}
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#f8f8f8",
          borderRadius: "4px",
        }}
      >
        <strong>Debug info:</strong>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(
            {
              email,
              isLoading,
              showOtpInput,
              otpValue,
              errorMsg,
              isVerified,
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default EmailVerificationDebug;
