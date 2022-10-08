import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderPage from "./pages/LoaderPage";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import { useProgress } from "./hooks/useProgress";

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
