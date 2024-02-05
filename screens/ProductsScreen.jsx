import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, IconButton, MD3Colors } from 'react-native-paper';
import { PRODUCTS } from '../data/Features';
import ProductsList from '../components/ProductsList';
import React, { useState } from 'react';
import AddProductModal from '../components/AddProductModal';

function Products() {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    function renderProductItem(itemData) {
        function viewProductHandler() {
            console.log('View product: ' + itemData.item.title);
            console.log('Item ID: ' + itemData.item);
            navigation.navigate('Product Details', { itemData: itemData.item , itemDescription: itemData.item.description})
        }
        return (
            <ProductsList
                title={itemData.item.title}
                color={itemData.item.color}
                icon={itemData.item.icon}
                onPress={viewProductHandler}
            />
        );
    }

    function addProductHandler() {
        setModalVisible(true);
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
            <IconButton
                style={styles.addBtn}
                icon="plus"
                iconColor="white"
                backgroundColor="#F4813F"
                size={20}
                onPress={addProductHandler}
            />
            <AddProductModal visible={isModalVisible} onClose={closeModal} />
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