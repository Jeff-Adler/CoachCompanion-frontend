import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

class ActivityTitle extends React.Component {
  state = {
    activity : null
  };

//   onChangeText = (name) => (text) => this.setState({ [name]: text });

  render() {
    // const { username, password } = this.state;
    const { activityTitle} = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          onChangeText={this.onChangeText("activityTitle")}
          value={activityTitle}
        />
        {/* <Button title="Submit" onPress={() => loginHandler(this.state)} /> */}
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