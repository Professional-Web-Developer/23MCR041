import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: 
  {
     type: String, 
     required: true 
    },
  price:
   { 
    type: Number,
     required: true 
    },
  rating:
   { type: Number, 
    required: true
 },
  discount: 
  { type: Number, 
    required: true 
},
  availability:
   { type: String,
     required: true 
    },
  company:
   { type: String,
     required: true,
      enum: ["AMZ", "FLP", "SNP", "MYN", "AZO"] 
    },
  category: 
  { type: String, 
    required: true,
     enum: ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"] 
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;