import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MenuImg from "../assets/img/header/menu.png";

function Header({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => navigation.navigate("SliderBar")}
      >
        {/* <Search /> */}
        <Image source={MenuImg} style={styles.Menu} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Menu: {
    width: 20,
    height: 20,
    backgroundColor: "#056B14",
    paddingLeft: 10,
    left: 15,
  },
});
export default Header;
