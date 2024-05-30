const productList = () => {
    return fetch("https://fake-geek.vercel.app/productos")
    .then((res) => res.json())
    .catch((err) => console.log(err))
};

const createProducts = (nombre, precio, imagen) =>  {
    return fetch("https://fake-geek.vercel.app/productos",{
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagen,
            nombre,
            precio 
        })
    })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

const deleteProduct = (productId) => {
    return fetch(`https://fake-geek.vercel.app/productos/${productId}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export const servicesProducts = {
    productList, 
    createProducts,
    deleteProduct
}