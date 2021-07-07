import React from "react";
import { TextInput, StyleSheet } from "react-native";

/**
 * @author
 * @function Search
 **/

const Search = (props) => {
  const [value, setValue] = React.useState("");
  return (
    <TextInput style={styles.input} onChangeText={setValue} value={value} />
  );
};

const styles = StyleSheet.create({
  input: {
    width:150,
    borderRadius : 4,
    fontSize:16,
    backgroundColor: "white",
    left:150
  },
});

export default Search;
