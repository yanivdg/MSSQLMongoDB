const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mongodb_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = mongoose.model('Item', {
  name: String,
  description: String,
});

app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.send(newItem);
});

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
