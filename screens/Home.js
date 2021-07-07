import * as React from "react";
import { View, Text, Button} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate("Category")}
      />
      <Button
        title="Slider"
        onPress={() => navigation.navigate("SliderBar")}
      />
    </View>
  );
}

export default HomeScreen;
