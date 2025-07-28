const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const incidentRoutes = require('./routes/incidents');

const app = express();
app.use(express.json());
app.use('/api/incidents', incidentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
