import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Pressable
} from 'react-native';

function EditProduct() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput placeholder="Product Name" style={styles.textInput} />
                    <TextInput placeholder="Product Price" style={styles.textInput} />
                    <TextInput placeholder="Product Description" style={styles.textInput}
                        nmultiline
                        numberOfLines={4}
                        maxLength={40} />
                    <View style={styles.btnContainer}>
                        <Pressable style={styles.submitBtn} android_ripple={{ color: '#ccc' }}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        // backgroundColor: 'white',
        marginTop: 12,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtn: {
        backgroundColor: '#F4813F',
        padding: 12,
        borderRadius: 10,
        width: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default EditProduct;