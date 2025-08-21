import express from 'express';
const router = express.Router();
import CatalogItem from '../models/CatalogItem.js';

// Create
router.post('/', async (req, res) => {
  try {
    const item = new CatalogItem(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// List
router.get('/', async (req, res) => {
  try {
    const items = await CatalogItem.find({ providerId: req.query.providerId });
    res.json(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update
router.patch('/:id', async (req, res) => {
  try {
    const item = await CatalogItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Toggle active
router.patch('/:id/toggle', async (req, res) => {
  try {
    const item = await CatalogItem.findById(req.params.id);
    item.isActive = !item.isActive;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await CatalogItem.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
