import React, { useState } from "react";
import axios from "axios";
import "./QueryGenerator.css";
import CodeBlock from "./CodeBlock";

function QueryGenerator({ apiUrl, showToast }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError("Please enter a natural language query");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post(`${apiUrl}/generate-query/generate`, {
        question: input,
      });

      setResult(response.data);
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || err.message || "Failed to generate query";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleGenerate();
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label}!`);
  };

  return (
    <div className="query-generator">
      <h2>Generate Query</h2>

      <div className="input-section">
        <label htmlFor="input-text">Enter your natural language query:</label>
        <textarea
          id="input-text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g., show inactive users from the last month"
          className="input-textarea"
          rows={4}
        />
        <small className="hint">Tip: Press Ctrl+Enter to generate</small>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="generate-button"
      >
        {loading ? "⏳ Generating..." : "✨ Generate Query"}
      </button>

      {error && <div className="error-message">{error}</div>}

      {result && (
        <div className="result-section">
          <div className="result-item">
            <h3>📝 Natural Language</h3>
            <p className="interpreted-text">{result.input}</p>
          </div>

          {result.sql && (
            <div className="result-item">
              <div className="result-header">
                <h3>🔍 SQL Query</h3>
                <button
                  onClick={() => copyToClipboard(result.sql, "SQL")}
                  className="copy-button"
                >
                  📋 Copy
                </button>
              </div>
              <CodeBlock code={result.sql} language="sql" />
            </div>
          )}

          {result.mongo && (
            <div className="result-item">
              <div className="result-header">
                <h3>🍃 MongoDB Query</h3>
                <button
                  onClick={() => copyToClipboard(result.mongo, "MongoDB")}
                  className="copy-button"
                >
                  📋 Copy
                </button>
              </div>
              <CodeBlock code={result.mongo} language="javascript" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QueryGenerator;
