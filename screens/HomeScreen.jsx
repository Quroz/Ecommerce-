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
                                style={{ width: 350, height: 30, borderRadius: 0, borderWidth: 0 }}
                                placeholder={Date.now()}
                                allowFontScaling={false}
                                customButton={(onConfirm) => customButton(onConfirm)}
                                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                                customStyles={{
                                    placeholderText: { fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto" },
                                    headerStyle: { backgroundColor: "#003580" },
                                    contentText: { fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto" }
                                }}
                                selectedBgColor="#0047ab"
                                centerAlign


                            />
                        </Pressable>

                        <Pressable style={{ alignItems: "center", flexDirection: "row", gap: 10, paddingHorizontal: 10, borderColor: "#ffc72c", borderWidth: 2, paddingVertical: 15 }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Ionicons name="person-outline" size={24} color="black" />
                            <TextInput placeholder='1 room * 2 adults * 0 children' style={{ flex: 1 }} />
                        </Pressable>

                        <Pressable style={{ gap: 10, paddingHorizontal: 10, borderColor: "#ffc72c", borderWidth: 2, paddingVertical: 15, backgroundColor: "#2a52be" }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: "white" }}>Search</Text>
                        </Pressable>
                    </View>
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

                </ModalContent>
            </BottomModal>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})