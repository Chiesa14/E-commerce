import Product from "../models/Products.js";

export async function createProduct(req, res) {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.status(200).json("Product created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function getAllProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Failed to get Products");
    console.log(error);
  }
}
export async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(`Failed to get product with id ${req.params.id}`);
  }
}
export async function searchProduct(req, res) {
  try {
    const result = await Product.find({
      $or: [
        { title: { $regex: new RegExp(req.params.key, "i") } },
        { supplier: { $regex: new RegExp(req.params.key, "i") } },
        { description: { $regex: new RegExp(req.params.key, "i") } },
        { product_location: { $regex: new RegExp(req.params.key, "i") } },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Failed to get product");
  }
}
