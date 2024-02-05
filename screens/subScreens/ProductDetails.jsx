import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

function ProductDetails({ route }) {

    const { itemData } = route.params;
    const { itemDescription } = route.params;
    return (
        <View style={styles.container}>
            <Text>Product Details</Text>
            {/* get item data from the navigation */}
            <Text>Item ID: {itemData.id}</Text>
            <Text>Item Title: {itemData.title}</Text>
            <Text>Item Pic: {itemData.icon}</Text>
            <Text>Item Picture</Text>
            <Image source={itemData.icon} style={{ width: 100, height: 100 }} />
        </View>
    );
}

export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})