require("dotenv").config();
const express = require("express");
const cors = require("cors");
const queryRouter = require("./routes/query");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/generate-query", queryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Query Generator Agent running on port ${PORT}`);
});
