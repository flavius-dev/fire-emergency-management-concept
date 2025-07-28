const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  location: String,
  severity: String,
  type: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Incident', incidentSchema);
