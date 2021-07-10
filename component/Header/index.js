import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../StyleSheet/Header";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * @author
 * @function Header
 **/
function Header({ navigation }) {
  const Menu = () => {
    return navigation.navigate("Menu");
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Home")}>
        <MaterialIcons
          name="menu"
          size={33}
          color="yellow"
        />
      </TouchableOpacity>
      <Text style={styles.menuText}>MENU</Text>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

export default Header;
