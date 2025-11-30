const axios = require("axios");

async function generateQuery(question) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || "models/gemini-2.5-flash";

  const url = `https://generativelanguage.googleapis.com/v1/${model}:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        parts: [
          {
            text: `
Convert the input into JSON with SQL & Mongo queries only.
No explanation. No markdown. No backticks.

Return ONLY valid JSON like:
{
 "sql":"SELECT ...",
 "mongo":"db.collection.find(...)"
}

Input: ${question}
            `,
          },
        ],
      },
    ],
  };

  const res = await axios.post(url, body);

  let text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  // Remove backticks & code formatting from output 🔥
  text = text.replace(/```json|```/g, "").trim();

  // Now safely parse JSON
  const data = JSON.parse(text);

  return data;
}

module.exports = generateQuery;
