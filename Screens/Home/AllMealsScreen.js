import React from "react"
import { View, Text, FlatList, SafeAreaView,TouchableOpacity } from "react-native"
import { allMeals } from "../../Data/DummyData"
import Colors from "../../Constants/Colors"

const AllMealsScreen = props => {
    const catId = props.route.params.id
    const allFilterMeal = allMeals.filter((item) => item.catId === catId)

    return (
        <SafeAreaView style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: Colors.bgWhite, }}>
            <View style={{ height: "90%", width: "90%" }}>
                <FlatList
                    key={(item) => item.id}
                    keyExtractor={(item, index) => index.toString()}
                    data={allFilterMeal}
                    renderItem={(itemData) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>{
                                    props.navigation.navigate("allMealDetail",{
                                        data:itemData.item
                                    })
                                }}
                                style={{ height: 50, width: "100%", backgroundColor: "lightgray", marginBottom: 10, borderRadius: 10 }}>
                                <Text>{itemData.item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}



                />
            </View>
        </SafeAreaView>
    )
}
export default AllMealsScreen