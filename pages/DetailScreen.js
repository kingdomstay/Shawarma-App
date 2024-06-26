// В файле DetailScreen.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const DetailScreen = () => {
    const route = useRoute();
    const { itemName, sectionTitle } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text>{sectionTitle}</Text>
            <Text>{itemName}</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailScreen;
