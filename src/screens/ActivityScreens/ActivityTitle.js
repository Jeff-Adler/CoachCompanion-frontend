import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

class ActivityTitle extends React.Component {
  render() {
    const { navigation, onChangeText, title } = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder="Activity"
          onChangeText={onChangeText("title")}
          value={title}
        />
        <Button title="Next" onPress={() => navigation.navigate("PointValue")} /> 
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

export default ActivityTitle;