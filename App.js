import React, {useContext, useEffect} from 'react';
import { StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import CatalogScreen from "./pages/CatalogScreen";
import ProfileScreen from "./pages/ProfileScreen";
import DetailScreen from "./pages/DetailScreen";
import { MyTheme } from "./GlobalTheme";
import CartScreen from "./pages/CartScreen";
import { CartProvider } from './CartContext';

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

function App() {

    return (
        <CartProvider>
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Меню') {
                            iconName = focused ? 'restaurant' : 'restaurant-outline';
                        } else if (route.name === 'Корзина') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if (route.name === 'Профиль') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#ef0202',
                    tabBarInactiveTintColor: 'gray'
                })}
            >
                <Tab.Screen name="Меню" options={{headerShown: false}} component={CatalogStack} />
                <Tab.Screen name="Корзина" component={CartScreen} options={{tabBarBadge: null,}} />
                <Tab.Screen name="Профиль" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        </CartProvider>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
