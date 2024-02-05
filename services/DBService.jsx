// DBService.js
import SQLite from 'react-native-sqlite-storage';

let db;

const initializeDatabase = () => {
    db = SQLite.openDatabase(
        {
            name: 'mainDB',
            location: 'default',
        },
        () => {},
        error => {
            console.log('Error opening database:', error);
        },
    );
};

const addProductHandler = (productName, productPrice, productDescription) => {
    const productId = Date.now().toString();
    
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO products (id, title, price, description) VALUES (?, ?, ?, ?)',
            [productId, productName, productPrice, productDescription],
            (_, result) => {
                console.log('Product added successfully');
            },
            (_, error) => {
                console.log('Error adding product:', error);
            },
        );
    });
};

export { initializeDatabase, addProductHandler };
