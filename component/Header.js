import React from "react";
import { Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import MenuImg from "../assets/img/header/menu.png";

function Header() {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => {
        Alert.alert("Hiển thị menu");
      }}
    >
      <Image source={MenuImg} style={styles.Menu} />
    </TouchableOpacity>
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
