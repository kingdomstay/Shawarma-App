import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import CartContext from '../CartContext';

const CartScreen = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>{item.price}</Text>
            <TouchableOpacity
                style={styles.removeFromCartButton}
                onPress={() => removeFromCart(item.id)}
            >
                <Text style={styles.removeButtonText}>Удалить</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyCartText}>Корзина пуста</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    renderItem={renderCartItem}
                    keyExtractor={item => item.id}
                />
            )}
            <TouchableOpacity
                style={styles.clearCartButton}
                onPress={() => clearCart()}
            >
                <Text style={styles.clearCartText}>Очистить корзину</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    emptyCartText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cartItemName: {
        fontSize: 18,
    },
    cartItemPrice: {
        fontSize: 16,
        color: '#888',
    },
    removeFromCartButton: {
        padding: 10,
        backgroundColor: '#ef0202',
        borderRadius: 5,
    },
    removeButtonText: {
        color: 'white',
    },
    clearCartButton: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#ef0202',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    clearCartText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CartScreen;
