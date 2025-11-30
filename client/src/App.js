import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Toast from "./components/Toast";
import QueryGenerator from "./components/QueryGenerator";
import History from "./components/History";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8008";

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, duration = 2000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🤖 Query Generator Agent</h1>
          <p>Convert natural language to SQL & MongoDB queries</p>
        </header>

        <main className="main">
          <QueryGenerator apiUrl={API_BASE_URL} showToast={showToast} />
          <History apiUrl={API_BASE_URL} />
        </main>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  );
}

export default App;
