const express = require("express");
const router = express.Router();
const generateQuery = require("../services/llm");
const { MongoClient } = require("mongodb");

// POST /generate-query
router.post("/generate", async (req, res) => {
  try {
    const question = req.body?.question || req.body?.text || req.body?.input;
    if (!question)
      return res
        .status(400)
        .json({ error: "Missing `question` in request body" });

    const result = await generateQuery(question);

    // Save to memory (MongoDB) if configured
    if (process.env.MONGO_URI) {
      try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        const db = client.db(process.env.MONGO_DB || "agent_memory");
        const coll = db.collection("queries");
        await coll.insertOne({
          question,
          sql: result.sql,
          mongo: result.mongo,
          createdAt: new Date(),
        });
        await client.close();
      } catch (e) {
        console.warn("Failed to write memory:", e.message);
      }
    }

    return res.json({
      input: result.input,
      sql: result.sql,
      mongo: result.mongo,
    });
  } catch (err) {
    console.error("generate error", err);
    return res.status(500).json({ error: err.message });
  }
});

// GET /generate-query/history
router.get("/history", async (req, res) => {
  if (!process.env.MONGO_URI)
    return res.status(400).json({ error: "MONGO_URI not configured" });
  try {
    const limit = Math.min(Number(req.query.limit) || 50, 1000);
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db(process.env.MONGO_DB || "agent_memory");
    const coll = db.collection("queries");
    const docs = await coll
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();
    await client.close();
    return res.json({ items: docs });
  } catch (e) {
    console.error("history error", e);
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
