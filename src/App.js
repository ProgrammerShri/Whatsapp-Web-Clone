import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import LandingPage from "./pages/LandingPage";

function App() {
  const { loading, value } = useProgress();

  if (true) {
    return <Loader value={value} />;
  }

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;

const useProgress = (maxTimeInSeconds = 300) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldVal) => {
        const newVal = oldVal + 10;

        if (newVal >= 100) {
          clearInterval(interval);
          setLoading(false);
        }

        return newVal;
      });
    }, 600);
  }, []);

  return { loading, value };
};
