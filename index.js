let express = require('express');
let app = express();
require('dotenv').config()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require("./routes/index");
app.use("/api", routes);

app.listen(process.env.PORT, () => console.log('Server started'));