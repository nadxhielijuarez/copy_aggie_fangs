
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 3001;
 
app.use(cors());
app.use(express.json());
 
app.post("/compile", (req, res) => {
    //getting the required data from the request
 
    var data = JSON.stringify({
        "clientId": "8e2179c5f20a2ea0d7f50415eba3bc21",
        "clientSecret": "c59a29e64993daecaf7781371ee5b24af7e6363379cad0ae36c80890dc2acac1",
        "script": req.body.code,
        "stdin": req.body.std,
        "language": "cpp17",
        "versionIndex": "0"
      });
      
      var config = {
        method: 'post',
        url: 'https://api.jdoodle.com/v1/execute',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
          res.send(JSON.stringify(response.data))
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
})
 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});