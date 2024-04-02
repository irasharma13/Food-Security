const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;

app.post("/", (req, res) => {
  const { prompt } = req.body;
  const data = {
    sourceId: "cha_XXXXsource_idXXXX",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  const config = {
    headers: {
      "x-api-key": "XXXXapi-keyXXXX",
      "Content-Type": "application/json",
    },
  };

  axios
    .post("https://api.chatpdf.com/v1/chats/message", data, config)
    .then((response) => {
      console.log("Result:", response.data.content);
      //console.log("Result:", response.data);
      console.log("we are in")
      var responseData = response.data.content;
      res.send({ responseData });
    })
    .catch((error) => {
      console.error("Error:", error.message);
      console.log("Response:", error.response.data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
