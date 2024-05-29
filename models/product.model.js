const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the product"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the quantity of the product"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter the price of the product"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;
