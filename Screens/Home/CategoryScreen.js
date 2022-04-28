import React from "react"
import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from "react-native"
import Colors from "../../Constants/Colors"
import { allCategories } from "../../Data/DummyData"

const CategoryScreen = (props) => {
  return (
    <SafeAreaView style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: Colors.bgWhite, }}>
      <View style={{ height: "90%", width: "90%" }}>
        <FlatList
          key={(item) => item.id}
          keyExtractor={(item, index) => index.toString()}
          data={allCategories}
          renderItem={(itemData) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("allMeals", {
                  id: itemData.item.id,


                })}
                style={{ height: 50, width: "100%", backgroundColor: itemData.item.color, marginBottom: 10, borderRadius: 10 }}>
                <Text>{itemData.item.name}</Text>
              </TouchableOpacity>
            )
          }}



        />
      </View>
    </SafeAreaView>
  )
}

export default CategoryScreen