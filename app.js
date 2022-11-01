const express = require("express");
require(dotenv).config();
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Okikiola",
    backend: true,
    age: 21,
    bio: "I am a backend developer",
  });
});

app.listen(process.env.PORT, "localhost", (err, data) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log(`Server is running on port ${process.env.PORT}`);
  }
});
