import mongoose from 'mongoose';

const CatalogItemSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  category: String,
  pricePKR: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  fulfilmentType: { type: String, enum: ['GOODS', 'SERVICE'], default: 'GOODS' },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const CatalogItem = mongoose.model('CatalogItem', CatalogItemSchema);
export default CatalogItem;
