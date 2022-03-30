let express = require('express');
let app = express();

const port = 3000;

const routes = require("./routes/index")

app.use("/api", routes)

app.listen(port, () => console.log('Server started'))