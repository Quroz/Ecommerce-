import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'

const SearchResults = ({ data, input, setInput }) => {
    return (
        <View style={{ padding: 10 }}>
            <FlatList
                data={data}
                renderItem={({ item, i }) => {
                    if (item.place.toLowerCase().includes(input.toLowerCase())) {
                        if (input === "") {
                            return null
                        }
                        return (
                            <Pressable key={i} style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                                <View>
                                    <Image source={{ uri: item.placeImage }} style={{ width: 70, height: 70 }} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>{item.place}</Text>
                                    <Text style={{ marginVertical: 4 }}>{item.shortDescription}</Text>
                                    <Text style={{ color: "gray", fontSize: 15 }}>{item.properties.length} properties</Text>
                                </View>
                            </Pressable>
                        )
                    }
                }}
            />
        </View>
    )
}

export default SearchResults

const styles = StyleSheet.create({})