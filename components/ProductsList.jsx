import { Pressable, View, Text, StyleSheet, Platform, Image } from 'react-native';

function ProductsList({ title, color, icon, onPress }) {
    return (
        <View>
            <View style={styles.gridItem}>
                <Pressable
                    onPress={onPress}
                    android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [
                        styles.button,
                        pressed ? styles.buttonPressed : null,
                    ]}
                >
                    <View style={[styles.innerContainer, { backgroundColor: color }]}>
                        <Image style={styles.module_icon} source={icon} />
                        <Text style={styles.sub_title}>{title}</Text>
                    </View>
                </Pressable>
            </View>
        </View>

    );
}

export default ProductsList;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,

        borderRadius: 5,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    module_icon: {
        width: 30,
        height: 30,
    },
    sub_title: {
        paddingTop: 15,
    }
});