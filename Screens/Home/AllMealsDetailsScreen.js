import React from "react"
import { View, Text, SafeAreaView, Image, FlatList } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const AllMealsDetailScreen = props => {
    const data = props.route.params.data

    const renderList = (itemData) => {
        return (
            <View style={{ height: 50, width: 100, marginHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                <Text>{itemData.item.ingName}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{marginTop:50, height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <Image
                        source={{ uri: data.imageUrl }}
                        style={{ height: 100, width: "100%" }}
                    />
                    <View style={{ marginVertical: 10, justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Text>{`Title ${data.title}`}</Text>
                    </View>


                    <View style={{ marginVertical: 10, justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Text>{`Description: ${data.description}`}</Text>
                    </View>

                    <View style={{ marginVertical: 10, justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Text>{`Time: ${data.time}`}</Text>
                    </View>

                    <View>
                        <Text>Ingridient</Text>
                    </View>

                    <View >
                        <FlatList
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            data={data.ing}
                            renderItem={renderList}

                        />
                    </View>


                    {
                        data.ing.map((item) => {
                            return (
                                <View style={{ height: 50, width: 100, marginHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Text>{item.ingName}</Text>
                                </View>
                            )
                        })
                    }




                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AllMealsDetailScreen