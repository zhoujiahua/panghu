const express = require("express");
const path = require("path");
const app = express();

//Set public folder
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  const html = `<h1>Hey,小子赶紧给你虎哥点赞！</h1><h2>不然我胖虎打死你...</h2>`;
  return res.send(html);
});

// Home page
app.get("/list", (req, res) => {
  const english = require("./data/Business_English.json");
  let html = '';
  english.forEach((v, k) => {
    
  })

  return res.send(english)
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`http://localhost:${port}`));
