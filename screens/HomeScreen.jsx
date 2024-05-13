import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, Button } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"
import Header from '../components/Header'
import { Feather } from '@expo/vector-icons';
import DatePicker from "react-native-date-ranges"
import { BottomModal, ModalFooter, ModalButton, ModalTitle, SlideAnimation, ModalContent } from "react-native-modals"

const HomeScreen = () => {

    const navigation = useNavigation()
    const [selectedDates, setSelectedDates] = useState()
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Booking.com",
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
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
            )
        })
    }, [])


    const customButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={{ container: { width: "100%", marginHorizontal: "3%" }, text: { fontSize: 20 } }
                }
                primary
                title="Submit"
            />
        )
    }
    return (
        <>
            <View>
                <Header />
                <ScrollView>
                    <View style={{ margin: 20, borderColor: "#ffc72c", borderWidth: 3, borderRadius: 6 }}>
                        <Pressable style={{ alignItems: "center", flexDirection: "row", gap: 10, paddingHorizontal: 10, borderColor: "#ffc72c", borderWidth: 2, paddingVertical: 15 }}>
                            <Feather name="search" size={24} color="black" />
                            <TextInput placeholder='Enter your destination' style={{ flex: 1 }} />
                        </Pressable>

                        <Pressable style={{ alignItems: "center", flexDirection: "row", gap: 10, paddingHorizontal: 10, borderColor: "#ffc72c", borderWidth: 2, paddingVertical: 15 }}>
                            <Feather name="calendar" size={24} color="black" />
                            <DatePicker
                                mode={"range"}
                                style={{ width: 350, height: 30, borderRadius: 0, borderWidth: 0,color: "lightgray"  }}
                                placeholder={Date.now()}
                                allowFontScaling={false}
                                customButton={(onConfirm) => customButton(onConfirm)}
                                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                                customStyles={{
                                    placeholderText: { fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto", color: "lightgray" },
                                    headerStyle: { backgroundColor: "#003580",color: "lightgray"  },
                                    contentText: { fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto",color: "lightgray"  }
                                }}
                                selectedBgColor="#0047ab"
                                centerAlign


                            />
                        </Pressable>

                        <Pressable style={{ alignItems: "center", flexDirection: "row", gap: 10, paddingHorizontal: 10, borderColor: "#ffc72c", borderWidth: 2, paddingVertical: 15 }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Ionicons name="person-outline" size={24} color="black" />
                            <Text style={{ flex: 1, color: "lightgray" }}>{rooms} rooms-{adults} adults-{children} children</Text>
                        </Pressable>

                        <Pressable style={{ gap: 10, paddingHorizontal: 10, borderColor: "#ffc72c", borderWidth: 2, paddingVertical: 15, backgroundColor: "#2a52be" }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: "white" }}>Search</Text>
                        </Pressable>
                    </View>

                    <Text style = {{marginHorizontal: 20, fontSize: 17, fontWeight: "500"}}>Travel More spend less</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                    <Pressable 
                    style = {{marginHorizontal: 20,width: 200, height: 150, marginTop: 10, backgroundColor: "#003580", borderRadius: 10, padding: 20}}
                        >
                           <Text style = {{fontSize: 15, color: "white", fontWeight: "bold", marginVertical: 7}}>Genious</Text>
                           <Text style = {{color: "white", fontSize: 15, fontWeight: "500"}}>You are at genious level one in our loyalty program</Text>
                        </Pressable>
                        <Pressable 
                    style = {{marginHorizontal: 20,width: 200, height: 150, marginTop: 10, backgroundColor: "#003580", borderRadius: 10, padding: 20}}
                        >
                           <Text style = {{fontSize: 15, color: "white", fontWeight: "bold", marginVertical: 7}}>Genious</Text>
                           <Text style = {{color: "white", fontSize: 15, fontWeight: "500"}}>You are at genious level one in our loyalty program</Text>
                        </Pressable>
                        <Pressable 
                    style = {{marginHorizontal: 20,width: 200, height: 150, marginTop: 10, backgroundColor: "#003580", borderRadius: 10, padding: 20}}
                        >
                           <Text style = {{fontSize: 15, color: "white", fontWeight: "bold", marginVertical: 7}}>Genious</Text>
                           <Text style = {{color: "white", fontSize: 15, fontWeight: "500"}}>You are at genious level one in our loyalty program</Text>
                        </Pressable>
                    </ScrollView>
                </ScrollView>
            </View>

            <BottomModal
                swipeThreshold={200}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                swipeDirection={["up", "down"]}
                footer={<ModalFooter>
                    <ModalButton text="Apply" style={{ marginBottom: 20, color: "white", backgroundColor: "#003580" }}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </ModalFooter>}
                modalTitle={<ModalTitle title="Select rooms and guests" />}
                modalAnimation={new SlideAnimation({
                    slideFrom: "bottom"
                })}
                onHardwareBackPress={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onTouchOutside={() => setModalVisible(!modalVisible)}
            >
                <ModalContent style={{ width: "100%", height: 310 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Rooms</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#bebebe", backgroundColor: "#e0e0e0" }} onPress={(c) => setRooms((c) => c-1)}>
                                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", paddingHorizontal: 6 }}>{rooms}</Text>
                            </Pressable>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#bebebe", backgroundColor: "#e0e0e0" }} onPress={(c) => setRooms((c) => c+1)}>
                                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Adults</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#bebebe", backgroundColor: "#e0e0e0" }} onPress={(c) => setAdults((c) => c-1)}>
                                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", paddingHorizontal: 6 }}>{adults}</Text>
                            </Pressable>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#bebebe", backgroundColor: "#e0e0e0" }} onPress={(c) => setAdults((c) => c+1)}>
                                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Children</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#bebebe", backgroundColor: "#e0e0e0" }} onPress={(c) => setChildren((c) => c-1)}>
                                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", paddingHorizontal: 6 }}>{children}</Text>
                            </Pressable>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#bebebe", backgroundColor: "#e0e0e0" }} onPress={(c) => setChildren((c) => c+1)}>
                                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </ModalContent>
            </BottomModal>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})