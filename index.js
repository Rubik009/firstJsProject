let express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require("./routes/index");
app.use("/api", routes);

const port = 3000;
app.listen(port, () => console.log('Server started'));