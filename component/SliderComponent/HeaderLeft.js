import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { back } from "react-native/Libraries/Animated/src/Easing";
import TheHouse from "../../assets/img/header/house.png";
/**
 * @author
 * @class HeaderLeft
 **/

class HeaderLeft extends Component {
  render() {
    const { container, house, house1 , button } = styles;
    return (
      <View style={container}>
        <View style={button} >
          <Image source={TheHouse} style={house} />
        </View>
        <View style={button}>
          <Image source={TheHouse} style={house1} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    width:100,
    height:30,
    backgroundColor:"#D1CACA",
  },    
  house: {
    width: 30,
    height: 30,
    backgroundColor: "#D1CACA",
    flexDirection: "row",
  },
  house1: {
    width: 30,
    height: 30,
    backgroundColor: "#D1CACA",
    flexDirection: "row",
  },
});

export default HeaderLeft;
