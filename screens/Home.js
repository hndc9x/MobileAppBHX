import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import products from "../data/product.json";
import styles from "../StyleSheet/Home";

/**
 * @author
 * @function Home
 **/
function Home({ navigation }) {
  const { container, title, view, cloded } = styles;
  const renderRecipes = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={container}>
      <View style={view}>
        <Text style={title}>Ưu đãi cho bạn</Text>
        <Text style={cloded}>Không hiện lại x</Text>
      </View>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={(item) => renderRecipes(item)}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </SafeAreaView>
  );
}
export default Home;
