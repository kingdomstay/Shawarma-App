import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import foodCatalog from '../foodCatalog';

const { width } = Dimensions.get('window');
const itemWidth = width * 0.45; // ширина элемента, примерно половина ширины экрана

const CatalogScreen = ({ navigation }) => {

    const renderFoodItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.foodItem, { width: itemWidth, height: itemWidth * 1.2 }]} // высота примерно на 20% больше ширины
            onPress={() => navigation.navigate('О разделе', { category: item.category })}
        >
            <Image source={item.image} style={styles.foodItemImage} />
            <Text style={styles.foodItemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                style={{paddingTop: 5}}
                data={foodCatalog}
                renderItem={renderFoodItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    listContainer: {
        alignItems: 'center',
    },
    foodItem: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden', // чтобы обрезать изображение, если оно выходит за пределы
    },
    foodItemImage: {
        width: '100%', // изображение занимает 100% ширины карточки foodItem
        height: '100%', // изображение занимает 100% высоты карточки foodItem
        aspectRatio: 1, // сохраняем соотношение сторон для изображения
        resizeMode: 'cover', // масштабируем изображение, чтобы оно полностью заполняло карточку
    },
    foodItemText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный фон для текста
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
});

export default CatalogScreen;
