import bodyParser from "body-parser";
import express from "express";
import request from "request";

const app = express();
const port = 3001;

app.use("/", express.static("public"));
// ð½ è¿½å  POSTã§ãã¼ã¿ãåãåãããã«å¿è¦
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post("/auth/", (req, res) => {
  const options = {
    method: 'GET',
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${req.body.number}`,
    json: true,
  }
  request(options, (error, response, body) => {
    console.log(body.items[0].volumeInfo.title);
    res.send(body);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
