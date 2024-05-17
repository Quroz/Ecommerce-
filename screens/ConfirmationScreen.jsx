import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

const ConfirmationScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Confirmation",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
            headerBackTitle: 'Back',
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent"
            },
        })
    }, [])

    return (
        <View>
            <Pressable style={{ backgroundColor: "white", margin: 10 }}>
                <View style={{ marginHorizontal: 12, marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{route.params.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 5 }}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text>{route.params.rating}</Text>
                            <View style={{ backgroundColor: "#003580", paddingVertical: 3, borderRadius: 5, width: 100 }}>
                                <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>Genious Level</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#17b169", paddingHorizontal: 6, paddingVertical: 4, borderRadius: 6 }}>
                        <Text style={{ color: "white", fontSize: 13 }}>Travel sustainable</Text>
                    </View>
                </View>
                <View style={{ margin: 12, flexDirection: "row", alignItems: "center", gap: 60 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>Check In</Text>
                        <Text style={{ color: "#007fff", fontSize: 16, fontWeight: "bold" }}>{route.params.startDate}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>Check Out</Text>
                        <Text style={{ color: "#007fff", fontSize: 16, fontWeight: "bold" }}>{route.params.endDate}</Text>
                    </View>
                </View>
                <View style={{ margin: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>Rooms and Guests</Text>
                    <Text style={{ color: "#007fff", fontSize: 16, fontWeight: "bold" }}> {route.params.rooms} rooms {route.params.adults} adults {route.params.children} children</Text>
                </View>
                <Pressable style={{ backgroundColor: "#003580", width: 120, padding: 5, marginHorizontal: 12, marginBottom: 20, borderRadius: 4 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "bold" }}>Book Now</Text>
                </Pressable>
            </Pressable>
        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})