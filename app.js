const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Okikiola",
    backend: true,
    age: 21,
    bio: "I am a backend developer",
  });
});

app.listen(3000, "localhost", (err, data) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log("Server is running on port 3000");
  }
});
