import { Request, Response} from 'express';
import { badRequest, internalServerError, notFound, ok, validateNumber } from '../services/util';
import { Product, productModel } from '../models/products';


const insertProduct = (req: Request, res: Response) => {
    
    {
        const product = req.body
        if (!product)
            return badRequest(res, "Produto inválido");

        if (!product.name)
            return badRequest(res, "Informe o nome");

        if (!product.idade)
            return badRequest(res, "Informe a idade");

        if (!product.email)
            return badRequest(res, "Informe o email");
        
        if (!product.estado)
            return badRequest(res, "Informe o estado");
        
        if (!product.cidade)
            return badRequest(res, "Informe a cidade");
    }   

    const product = req.body as Product;
    return productModel.insertProduct(product)
        .then(product => {
            res.json(product)
        })
        .catch(err=> internalServerError(res, err))
}

const updateProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    {   
        if(!validateNumber(id))
            return badRequest(res,"id inválido")
        const product = req.body
        if (!product)
            return badRequest(res, "Produto inválido");

        if (!product.name)
            return badRequest(res, "Informe o nome");

        if (!product.idade)
            return badRequest(res, "Informe a idade");

        if (!product.email)
            return badRequest(res, "Informe o email");
        
        if (!product.estado)
            return badRequest(res, "Informe o estado");
        
        if (!product.cidade)
            return badRequest(res, "Informe a cidade");

        const productSaved = await productModel.getProduct(id)
        if (!productSaved)
            return notFound(res)

    }   

    const product = req.body as Product;
    return productModel.updateProduct(product)
        .then(product => {
            res.json(product)
        })
        .catch(err=> internalServerError(res, err))
}

const listProducts = ({}: Request, res: Response) => {
    productModel.listProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err=> internalServerError(res, err))
}

const getProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    {
        if(!validateNumber(id))
            return badRequest(res,"id inválido")  
    }

    return productModel.getProduct(id)
        .then((product) => {
            if(product)
                return res.json(product)
            else
                return notFound(res)
        })
        .catch(err=> internalServerError(res, err))
}

const getProductByEmail = (req: Request, res: Response) => {
    const email = req.params.email; 

    return productModel.getProductByEmail(email)
        .then((product) => {
            if (product) {
                return res.json(product);
            } else {
                return notFound(res);
            }
        })
        .catch((err) => internalServerError(res, err));
};

const deleteProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    {
        if(!validateNumber(id))
            return badRequest(res,"id inválido")

        const productSaved = await productModel.getProduct(id)
        if (!productSaved)
            return notFound(res)
    }


    return productModel.deleteProduct(id)
        .then(() => ok(res))
        .catch(err=> internalServerError(res, err))
}



export const productController = {
    insertProduct,
    listProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    getProductByEmail
}