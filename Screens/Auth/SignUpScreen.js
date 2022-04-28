import React from "react"
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,Button } from "react-native"
import Colors from "../../Constants/Colors"

const SignUpScreen = (props) => {
    return (
        <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: Colors.bgWhite, }}>
            <Button
            title="Go Back"
            onPress={()=>props.navigation.navigate("login")}
            />
        </SafeAreaView>
    )
}

export default SignUpScreen