import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput, KeyboardAvoidingView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';
import Products from '../model/Products';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import addProductHandler from '../services/ProductService';
// import realm from '../services/realm';

const ViewProductModal = ({ visible, onClose, itemData }) => {
    const [translateY] = useState(new Animated.Value(300));
    const navigation = useNavigation();
    const addProduct = (name, price, description) => {
        console.log('Adding product:', name, price, description);
    };

    React.useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: 100, // Adjust this value as needed
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
        return null;
    }

    var editProduct = () => {
        console.log('Edit Product');

        navigation.navigate('Edit Product');
    }

    return (
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Product Details</Text>
                    <View style={styles.actionBtnContainer}>
                        <IconButton
                            iconColor="white"
                            backgroundColor="#F4813F"
                            icon="pen"
                            size={20}
                            onPress={editProduct}
                        />
                        <IconButton
                            iconColor="white"
                            backgroundColor="red"
                            icon="close"
                            size={20}
                            onPress={onClose}
                        />
                    </View>
                </View>
                <View style={styles.itemData}>
                    <Text style={styles.itemDataTitle}>Product Name:          </Text>
                    <Text style={styles.itemDataValue}>{itemData.item.title}</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.itemData}>
                    <Text style={styles.itemDataTitle}>Product Description:</Text>
                    <Text style={styles.itemDataValue}>{itemData.item.price}</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.itemData}>
                    <Text style={styles.itemDataTitle}>Product Price:            </Text>
                    <Text style={styles.itemDataValue}>KES. 20</Text>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: '16%',
        height: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center', // Align modal content to the center horizontally
        justifyContent: 'flex-end', // Push modal content to the bottom of the screen
        zIndex: 90,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
        width: '100%',
        height: '45%',
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
    itemData: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    itemDataTitle: {
        fontSize: 15,
    },
    itemDataValue: {
        // wrap the line
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
    },
    divider: {
        height: 1,
        backgroundColor: 'black',
        marginTop: 5,
        marginBottom: 5,
    }
});


export default ViewProductModal;
