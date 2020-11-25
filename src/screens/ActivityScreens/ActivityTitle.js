import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

//comment
class ActivityTitle extends React.Component {
  render() {
    const { onChangeText, activityTitle } = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          onChangeText={onChangeText("activityTitle")}
          value={activityTitle}
        />
        <Button title="Submit" onPress={() => navigation.navigate("PointValue")} /> 
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