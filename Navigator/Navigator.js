import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../Screens/Auth/LoginScreen"
import SignUpScreen from "../Screens/Auth/SignUpScreen"
import CategoryScreen from "../Screens/Home/CategoryScreen"
import AllMealsScreen from "../Screens/Home/AllMealsScreen"
import AllMealsDetailScreen from "../Screens/Home/AllMealsDetailsScreen"
const Stack = createStackNavigator()


const AuthNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="signup" component={SignUpScreen} />

        </Stack.Navigator>
    )
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categry" component={CategoryScreen} />
            <Stack.Screen name="allMeals" component={AllMealsScreen} />
            <Stack.Screen name="allMealDetail" component={AllMealsDetailScreen} />


        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name="authNavigator" component={AuthNavigator} />
                <Stack.Screen name="homeNavigator" component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator