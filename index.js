let express = require('express');
let app = express();
require('dotenv').config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'First API ',
            description: 'The description of people and messages',
            contacts: {
                name: 'Roman Rubinshteyn'
            },
            servers: ['http://localhost:3000/'],
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const routes = require("./routes/index");
app.use("/api", routes);

app.listen(process.env.PORT, () => console.log('Server started'));