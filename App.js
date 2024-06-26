import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // импорт иконок из пакета @expo/vector-icons
import CatalogScreen from "./pages/CatalogScreen";
import ProfileScreen from "./pages/ProfileScreen";
import DetailScreen from "./pages/DetailScreen";
import { MyTheme } from "./GlobalTheme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CatalogStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Каталог"
                component={CatalogScreen}
                options={{
                    headerTitle: () => (
                        <Image
                            style={{ width: 110, height: 30 }}
                            source={require('./images/logo.png')}
                            resizeMode="contain"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#ef0202',
                    },
                }}
            />
            <Stack.Screen name="О разделе" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Главная') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Профиль') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#ef0202',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Главная" component={CatalogStack} />
                <Tab.Screen name="Профиль" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
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
