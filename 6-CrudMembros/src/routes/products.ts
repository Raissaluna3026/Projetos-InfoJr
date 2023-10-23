import { Router,Request,Response  } from "express"
import { productController } from "../controllers/products";

const productRouter = Router();
productRouter.post('/', productController.insertProduct)
productRouter.get('/', productController.listProducts)
productRouter.get('/:id', productController.getProduct)
productRouter.get('/email/:email', productController.getProductByEmail);
productRouter.delete('/:id', productController.deleteProduct)
productRouter.put('/:id', productController.updateProduct)


export {
    productRouter
}

