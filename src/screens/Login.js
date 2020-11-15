import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

class Login extends React.Component {
  state = {
    username: "JeffAdler",
    password: "blink2002",
  };

  onChangeText = (name) => (text) => this.setState({ [name]: text });

  render() {
    const { username, password } = this.state;
    const { navigation, loginHandler } = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          onChangeText={this.onChangeText("username")}
          value={username}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this.onChangeText("password")}
          value={password}
        />
        <Button title="Submit" onPress={() => loginHandler(this.state)} />
        <Button title="Sign-up" type="clear" onPress={() => navigation.navigate("Signup")} />
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

export default Login;
