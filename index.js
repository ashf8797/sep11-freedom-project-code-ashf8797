const express = require ("express");
const chalk = require("chalk");
const app = express();

app.use(`/api/v2/trains`, require('./routes/trains.js'));

const port = 3000;
app.listen (port, () => console.log(chalk.hex('#ff0000').bold.underline`OutcastCorp is listening on port ${port}..`));