import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import FavoritesScreen from "./screens/FavoritesScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Orchid List" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => <Icon name="home" type="font-awesome" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesScreen}
                    options={{
                        tabBarLabel: "Favorites",
                        tabBarIcon: ({ color, size }) => <Icon name="heart" type="font-awesome" color={color} size={size} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
