import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//layout
import Header from "./component/Header";
import HeaderLeftSlider from "./component/SliderComponent/HeaderLeft";
//screens
import Home from "./screens/Home";
import Category from "./screens/Category";
import CategoryDetails from "./screens/CategoryDetails";
import SliderBar from "./screens/SliderBar";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#056B14",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => <Header />,
        }}
      >
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen
          name="Category"
          options={{ title: "Category" }}
          component={Category}
        />
        <Stack.Screen name="Details" component={CategoryDetails} />
        <Stack.Screen
          name="SliderBar"
          component={SliderBar}
          options={{
            title:"",
            headerStyle: {
              backgroundColor: "#056B14",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => <HeaderLeftSlider />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
