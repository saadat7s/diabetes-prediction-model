const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const predictionRouter = require('./predictionRouter');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Use the predictionRouter for the '/predict' route
app.use('/predict', predictionRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
