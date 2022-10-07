import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderPage from "./pages/LoaderPage";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const { loading, value } = useProgress();

  if (loading) {
    return <LoaderPage value={value} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/messages" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
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
