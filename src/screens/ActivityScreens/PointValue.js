import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

class PointValue extends React.Component {
  render() {
    const { navigation, onChangeText, pointValue } = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder="Point Value of Activity"
          onChangeText={onChangeText("pointValue")}
          value={pointValue}
        />
        <Button title="Next" onPress={() => navigation.navigate("Category")} /> 
      </View>
    );
  }
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