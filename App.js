import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from 'react-native'

//layout
import Header from "./component/Header";
//screens
import Home from "./screens/Home";
import Category from "./screens/Category";
import CategoryDetails from "./screens/CategoryDetails";

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
          headerLeft: () => (<Header />)
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Bach Hoa Xanh" }}
        />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Details" component={CategoryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
