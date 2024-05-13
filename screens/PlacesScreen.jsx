import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"

const PlacesScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Popular Places",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
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
            <Pressable>
                <Pressable>

                </Pressable>

                <Pressable>

                </Pressable>

                <Pressable>

                </Pressable>
            </Pressable>
        </View>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({})