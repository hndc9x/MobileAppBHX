import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity , Alert} from "react-native";
import EleImage from "../assets/responsive.png";

export default function CategoryList(props) {
  const { category } = props;
  return (
      //onClick = onPress
    <TouchableOpacity activeOpacity={0.4} onPress={() => {
        Alert.alert("Ok");
    }}>
      <View>
        <Text>{category.name}</Text>
        <Image style={styles.categoryImg} source={EleImage} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryImg: {
    width: 64,
    height: 64,
  },
});
