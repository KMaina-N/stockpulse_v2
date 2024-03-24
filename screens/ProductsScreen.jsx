import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, IconButton, MD3Colors } from 'react-native-paper';
import { PRODUCTS } from '../data/Features';
import ProductsList from '../components/ProductsList';
import React, { useState } from 'react';
import AddProductModal from '../components/AddProductModal';
import ViewProductModal from '../components/ViewProductModal';

function Products() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const navigation = useNavigation();


    const viewProductHandler = (itemId) => {
        setSelectedItemId(itemId);
    };
    const closeProductView = () => {
        setSelectedItemId(null);
    }
    function renderProductItem(itemData) {
        // function viewProductHandler() {
        //     console.log('View product: ' + itemData.item.title);
        //     console.log('Item ID: ' + itemData.item);
        //     navigation.navigate('Product Details', { itemData: itemData.item , itemDescription: itemData.item.description})
        // }
        // setModalVisible(false)
        // setSelectedItemId(itemData.item.id);

        function closeProductView() {
            setSelectedItemId(null);
            setModalVisible(false);
        }
        return (
            <View>
                <ProductsList
                title={itemData.item.title}
                color={itemData.item.color}
                icon={itemData.item.icon}
                onPress={() => viewProductHandler(itemData)}
            />
            {/* {selectedItemId === itemData.item.id && (
                    <ViewProductModal item={itemData.item} visible={true} onClose={closeModal} />
                )} */}
            </View>
        );
    }

    function addProductHandler() {
        // setModalVisible(true);
        console.log('Add product');
        navigation.navigate('Add Product');
    }

    function closeModal() {
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={renderProductItem}
            />
            {selectedItemId && (
                <ViewProductModal
                    visible={true}
                    onClose={closeProductView}
                    itemData={selectedItemId}
                />
            )}
            <IconButton
                style={styles.addBtn}
                icon="plus"
                iconColor="white"
                backgroundColor="#F4813F"
                size={20}
                onPress={addProductHandler}
            />
            
            {/* <AddProductModal visible={isModalVisible} onClose={closeModal} /> */}
        </View>
    );
}



export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addBtn: {
        position: 'absolute',
        bottom: 20,
        left: 5,
        width: 60,
    }
})