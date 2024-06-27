import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CartContext from '../CartContext';
import foodCatalog from '../foodCatalog';

const DetailScreen = () => {
    const { addToCart, countCart } = useContext(CartContext);
    const route = useRoute();
    const { category } = route.params;

    const categoryData = foodCatalog.find(item => item.category === category);
    const { items } = categoryData;

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const renderProductItem = ({ item }) => (
        <View style={styles.productItem}>
            <View style={styles.productDetails}>
                <Text style={styles.productItemName}>{item.name}</Text>
                <Text style={styles.productItemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart({ ...item, id: generateUniqueId() })} // Генерируем уникальный id
            >
                <Ionicons name="add-circle-outline" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{categoryData.name}</Text>
            <FlatList
                data={items}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 20,
        paddingHorizontal: 14,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    productDetails: {
        flex: 1,
    },
    productItemName: {
        fontSize: 18,
    },
    productItemPrice: {
        fontSize: 16,
        color: '#888',
    },
    addToCartButton: {
        backgroundColor: '#ef0202',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DetailScreen;
