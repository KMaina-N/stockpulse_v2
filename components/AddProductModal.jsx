import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput, KeyboardAvoidingView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';
import Products from '../model/Products';
import { IconButton } from 'react-native-paper';
// import addProductHandler from '../services/ProductService';
// import realm from '../services/realm';

const AddProductModal = ({ visible, onClose }) => {
    const translateY = new Animated.Value(300);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    // const [productImage, setProductImage] = useState(null);

    function pickImageHandler() {
        ImagePicker.showImagePicker({ title: 'Pick an Image' }, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setProductImage(response.uri);
            }
        });
    }

    const addProduct = (name, price, description) => {
        console.log('Adding product:', name, price, description);
    };


    React.useEffect(() => {

        if (visible) {
            // initializeDatabase();
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 300,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    if (!visible) {
        return null; // Don't render anything if not visible
    }

    return (
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }, {height: 700}, {marginTop: 100}]}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Add Product</Text>
                    <View style={styles.actionBtnContainer}>
                        <IconButton
                            iconColor="white"
                            backgroundColor="red"
                            icon="close"
                            size={20}
                            onPress={onClose}
                        />
                        <IconButton
                            iconColor="white"
                            backgroundColor="#F4813F"
                            icon="check"
                            size={20}
                            onPress={addProduct}
                        />
                    </View>
                </View>
                {/* Add your form or content for adding a product */}
                {/* add product button */}

                <Text>Add Product</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    value={productName}
                    onChangeText={text => setProductName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Product Price"
                    value={productPrice}
                    onChangeText={text => setProductPrice(text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.productDescriptionInput}
                    placeholder="Product Description"
                    value={productDescription}
                    onChangeText={text => setProductDescription(text)}
                    multiline
                />

                {/* <TouchableOpacity style={styles.addButton} onPress={addProduct}>
                    <Text style={styles.ButtonText}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.ButtonText}>Close</Text>
                </TouchableOpacity> */}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'flex-end',
        height: '120%',

    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
        height: '50%',
        // marginBottom: '50%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    actionBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    addButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F4813F',
        borderRadius: 5,
        alignItems: 'center',
        // top: '40%',
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        // top: '40%',
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    productDescriptionInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 1,
    }
});

export default AddProductModal;
