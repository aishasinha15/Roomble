import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const saveRegistrationProgress = (screen, data) => {
    try {
      const progress = JSON.parse(localStorage.getItem("registration")) || {};
      progress[screen] = data;
      localStorage.setItem("registration", JSON.stringify(progress));
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  const getRegistrationProgress = (screen) => {
    try {
      const progress = JSON.parse(localStorage.getItem("registration")) || {};
      return Promise.resolve(screen ? progress[screen] : progress);
    } catch (error) {
      console.error("Failed to load progress:", error);
      return Promise.resolve(null);
    }
  };

  useEffect(() => {
    saveRegistrationProgress("BasicInfo", { visited: true });

    getRegistrationProgress("BasicInfo").then((data) => {
      if (data?.visited) {
        console.log("Welcome back!");
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1 className="landing-title">Your perfect roommate is waiting.</h1>
        <h2 className="landing-subtitle">Let's help you find them today!</h2>
      </div>

      <div className="animation-container">
        <DotLottieReact
          src="https://lottie.host/bb1dd1ee-fd8f-4a43-ae68-b895deb39aea/OHg6m5KP8W.lottie"
          loop
          autoplay
          style={{ height: "400px", width: "400px" }}
        />
      </div>

      <button onClick={() => navigate("/signup")} className="cta-button">
        Enter Basic Info
      </button>
    </div>
  );
};

export default Index;
