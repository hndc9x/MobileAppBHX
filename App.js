import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//component.
import Header from "./component/Header";
//screeen
import Home from "./screens/Home";
import Menu from "./screens/Menu";


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#056B14",
            height: 110
          },
          headerTitle: () => <Header />,
        }}
      > 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
