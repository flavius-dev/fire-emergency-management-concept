const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

router.post('/', async (req, res) => {
  try {
    const newIncident = new Incident(req.body);
    await newIncident.save();
    res.status(201).json(newIncident);
  } catch (error) {
    res.status(500).json({ error: 'Eroare la salvare incident' });
  }
});

router.get('/', async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Eroare la încărcare incidente' });
  }
});

module.exports = router;
