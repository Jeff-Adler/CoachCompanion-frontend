import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

function PointValue (props) {
  const { navigation, pointValue, setPointValue } = props;

  return (
    <View style={styles.container}>
      <Input
        placeholder="Point Value of Activity"
        onChangeText={text => setPointValue(text)}
        value={pointValue}
      />
      <Button title="Next" onPress={() => navigation.navigate("Category")} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PointValue;