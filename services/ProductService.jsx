import realm from './realm'


const addProduct = (name, price, description) => {
    realm.write(() => {
        realm.create('Product', {
            id: new Date().getTime(),
            name: name,
            price: price,
            description: description,
        });
    });
};

export default addProduct;