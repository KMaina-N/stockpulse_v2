import Realm from 'realm';

class Product extends Realm.Object {}
Product.schema = {
    name: 'Product',
    properties: {
        id: 'int',
        name: 'string',
        price: 'double',
        description: 'string',
    },
};

export default new Realm({ schema: [Product] });
