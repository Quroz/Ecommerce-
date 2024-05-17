import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import Amenities from '../components/Amenities';

const RoomsScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    console.log("min bram", route.params.rooms)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Available Rooms",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
            },
            headerBackTitle: 'Back',
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            },
        });
    }, []);

    const [selected, setSelected] = useState([])
    return (
        <>
            <ScrollView>
                {route.params.rooms.map((item, index) => (
                    <Pressable key={index} style={{ margin: 10, backgroundColor: "white", padding: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#007fff", fontSize: 17, fontWeight: "500" }}>{item.name}</Text>
                            <AntDesign name="infocirlceo" size={24} color="#007fff" />
                        </View>
                        <Text style={{ marginTop: 3, fontSize: 16 }}>Pay at the property</Text>
                        <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>Free cancellation available</Text>
                        <View style={{ marginTop: 4, flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontSize: 18, color: "red", textDecorationLine: "line-through" }}>{route.params.oldPrice}$</Text>
                            <Text style={{ fontSize: 18 }}>{route.params.newPrice}$</Text>
                        </View>
                        <Amenities />
                        {selected.includes(item.name) ? (
                            <Pressable style={{ borderColor: "#007fff", borderWidth: 2, borderRadius: 5, borderColor: "#318ce7", width: "100%", padding: 10, flexDirection: "row", alignItems: "center", backgroundColor: "#f0f8ff" }}>
                                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, color: "#318ce7", marginLeft: "auto", marginRight: "auto" }}>SELECTED</Text>
                                <Entypo name="circle-with-cross" size={24} color="red" onPress={() => setSelected([])} />
                            </Pressable>
                        ) : (
                            <Pressable onPress={() => setSelected(item.name)} style={{ borderColor: "#007fff", borderWidth: 2, borderRadius: 5, width: "100%", padding: 10 }}>
                                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 16, color: "#007fff" }}>SELECT</Text>
                            </Pressable>
                        )}
                    </Pressable>
                ))}
            </ScrollView>
            {selected.length > 0 ? (
                <Pressable
                    onPress={() =>
                        navigation.navigate("User", {
                            oldPrice: route.params.oldPrice,
                            newPrice: route.params.newPrice,
                            name: route.params.name,
                            children: route.params.children,
                            adults: route.params.adults,
                            rating: route.params.rating,
                            startDate: route.params.startDate,
                            endDate: route.params.endDate,
                        })
                    }
                    style={{
                        backgroundColor: "#007FFF",
                        padding: 8,
                        marginBottom: 30,
                        borderRadius: 3,
                        marginHorizontal: 15,
                    }}
                >
                    <Text
                        style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
                    >
                        Reserve
                    </Text>
                </Pressable>
            ) : null}
        </>
    )
}

export default RoomsScreen

const styles = StyleSheet.create({})