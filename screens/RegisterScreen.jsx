import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigation = useNavigation()

    const register = () => {
        if (email === "" || password === "" || phone === "") {
            Alert.alert(
                "Invalid Detials",
                "Please enter all the credentials",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {

            const user = userCredentials._tokenResponse.email;
            const uid = auth.currentUser.uid;

            setDoc(doc(db, "users", `${uid}`), {
                email: user,
                phone: phone
            })
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 10, alignItems: "center" }}>
            <KeyboardAvoidingView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                    <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>Register</Text>

                    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
                        Create an account
                    </Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>Email</Text>

                        <TextInput placeholder='Enter your email' placeholderTextColor={"black"} style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300, fontSize: 18 }} onChangeText={text => setEmail(text)} value={email} />
                    </View>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>Password</Text>

                        <TextInput placeholder='Enter your password' placeholderTextColor={"black"} style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300, fontSize: 18, }} secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
                    </View>
                </View>


                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>Phone</Text>

                        <TextInput placeholder='Enter your phone number' placeholderTextColor={"black"} style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300, fontSize: 18, }} onChangeText={text => setPhone(text)} value={phone} keyboardType="numeric" />
                    </View>
                </View>

                <Pressable style={{ width: 200, backgroundColor: "#003580", padding: 15, borderRadius: 7, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
                    onPress={() => register()}
                >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 17, fontWeight: "bold" }}>Register</Text>
                </Pressable>

                <Pressable style={{ marginTop: 20 }} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>Already have an account? Sign in</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})