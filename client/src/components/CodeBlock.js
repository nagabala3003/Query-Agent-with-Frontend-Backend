import React from "react";
import "./CodeBlock.css";

function CodeBlock({ code, language = "sql" }) {
  return (
    <pre className={`code-block language-${language}`}>
      <code>{code}</code>
    </pre>
  );
}

export default CodeBlock;
