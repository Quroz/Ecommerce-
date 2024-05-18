import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user
        })
    }

    useEffect(() => {
        try {
            const unsubscribe = auth.onAuthStateChanged((authUser) => {
                if (authUser) {
                    navigation.navigate("Main")
                }

                return unsubscribe
            })
        } catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 10, alignItems: "center" }}>
            <KeyboardAvoidingView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                    <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>Sign In</Text>

                    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
                        Sign in to your account
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

                <Pressable style={{ width: 200, backgroundColor: "#003580", padding: 15, borderRadius: 7, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
                    onPress={login}
                >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 17, fontWeight: "bold" }}>Login</Text>
                </Pressable>

                <Pressable style={{ marginTop: 20 }} onPress={() => navigation.navigate("Register")}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>Don't have an account? Sign up</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})