import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from "./screens/SavedScreen"
import BookingScreen from "./screens/BookingScreen"
import ProfileScreen from "./screens/ProfileScreen"
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
import RoomsScreen from './screens/RoomsScreen';
import UserScreen from './screens/UserScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Entypo name="home" size={24} color="#003580" /> : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                    )
                }} />
                <Tab.Screen name="Saved" component={SavedScreen} options={{
                    tabBarLabel: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <AntDesign name="heart" size={24} color="#003580" /> : (
                            <AntDesign name="hearto" size={24} color="black" />
                        )
                    )
                }} />
                <Tab.Screen name="Booking" component={BookingScreen} options={{
                    tabBarLabel: "Booking",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Ionicons name="notifications" size={24} color="#003580" /> : (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )
                    )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Ionicons name="person" size={24} color="#003580" /> : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        )
                    )
                }} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Search" component={SearchScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Places" component={PlacesScreen} options={{
                    headerBackTitle: 'Back',
                    headerTintColor: "white"
                }} />
                <Stack.Screen name="Map" component={MapScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Info" component={PropertyInfoScreen} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Rooms" component={RoomsScreen} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="User" component={UserScreen} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Booking" component={BookingScreen} options={{
                    headerShown: true
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}