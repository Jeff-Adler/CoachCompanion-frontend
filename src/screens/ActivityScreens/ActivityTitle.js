import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

function ActivityTitle (props) {
  const { navigation,  title, setTitle } = props;

  return (
    <View style={styles.container}>
      <Input
        placeholder="Activity"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Button title="Next" onPress={() => navigation.navigate("PointValue")} /> 
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

export default ActivityTitle;