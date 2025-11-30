import React, { useState, useEffect } from "react";
import axios from "axios";
import "./History.css";
import CodeBlock from "./CodeBlock";

function History({ apiUrl }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiUrl}/generate-query/history`);
      setItems(response.data.items || []);
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to fetch history";
      setError(errorMsg);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  return (
    <div className="history-panel">
      <div className="history-header">
        <h2>📚 Query History</h2>
        <button
          onClick={fetchHistory}
          disabled={loading}
          className="refresh-button"
        >
          {loading ? "⏳" : "🔄"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {!error && items.length === 0 && !loading && (
        <p className="empty-state">
          No queries yet. Generate one to get started!
        </p>
      )}

      {loading && <p className="loading-state">Loading history...</p>}

      <div className="history-list">
        {items.map((item, idx) => (
          <div key={idx} className="history-item">
            <div className="history-title">{item.question}</div>
            <div className="history-timestamp">
              {formatDate(item.createdAt)}
            </div>
            {item.sql && (
              <div className="history-query">
                <small>SQL:</small>
                <CodeBlock code={item.sql} language="sql" />
              </div>
            )}
            {item.mongo && (
              <div className="history-query">
                <small>MongoDB:</small>
                <CodeBlock code={item.mongo} language="javascript" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
