import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform, StatusBar} from 'react-native';



export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Профиль</Text>
        </View>
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
