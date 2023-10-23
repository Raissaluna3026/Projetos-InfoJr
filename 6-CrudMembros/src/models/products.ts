import { dbQuery, dbQueryFirst } from "../services/db";

export type Product = {
    id: number;
    name: string;
    email: string;
    idade: number;
    estado: string;
    cidade: string;
}
//inserir
const insertProduct = async (product: Product) => {
    await dbQuery('INSERT INTO product (name, idade, email, cidade, estado) VALUES(?,?,?,?,?)' , [product.name, product.idade, product.email, product.cidade, product.estado])
    let retorno = await dbQuery("SELECT seq AS Id FROM sqlite_sequence WHERE name = 'product'")
    return  getProduct(retorno[0].Id);
}
//update
const updateProduct = async (product: Product) => {
    await dbQuery('UPDATE product SET name = ?, idade = ?, email = ?, cidade =?, estado =? WHERE id =?', [product.name, product.idade, product.email, product.cidade, product.estado, product.id])
    return getProduct(product.id)
    
}

//selecionar
const listProducts = async () => {
    const retorno = await dbQuery('SELECT * FROM product');
    return retorno as Product[];


}
//buscar por id
const getProduct = async (id: number) => {
    const retorno = await dbQueryFirst('SELECT * FROM product WHERE id = ?', [id]);
    return retorno as Product | undefined;
}
//buscar por email
const getProductByEmail = async (email: string) => {
    const retorno = await dbQueryFirst('SELECT * FROM product WHERE email = ?', [email]);
    return retorno as Product | undefined;
}

//deletar
const deleteProduct = async (id: number) => {
    const retorno = await dbQueryFirst('DELETE FROM product WHERE id = ?', [id]);
}

export const productModel = {
    insertProduct,
    listProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    getProductByEmail
}