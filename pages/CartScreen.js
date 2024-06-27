import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import CartContext from '../CartContext';

// Получаем ширину экрана
const { width } = Dimensions.get('window');

const CartScreen = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
    const [selectedIndex, setSelectedIndex] = useState(0);

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
            <SegmentedControl
                values={['В ресторане', 'За столиком', 'С собой']}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                style={styles.segmentedControl}
            />
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
    segmentedControl: {
        width: width - 40, // ширина экрана минус отступы
    },
});

export default CartScreen;
