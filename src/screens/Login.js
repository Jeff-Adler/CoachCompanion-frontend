import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

function Login(props) {
  const { navigation, loginHandler } = props;
  const [username,setUsername]  = useState("JeffAdler")
  const [password,setPassword]  = useState("blink2002")

  const onChangeUsername = (text) => {
    setUsername(text)
  }

  const onChangePassword = (text) => {
    setPassword(text)
  }

  const submitLogin = () => {
    loginHandler({
      username: username,
      password: password
    })
  }
  
  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        onChangeText={onChangeUsername}
        value={username}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={onChangePassword}
        value={password}
      />
      <Button title="Submit" onPress={submitLogin} />
      <Button title="Sign-up" type="clear" onPress={() => navigation.navigate("Signup")} />
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

export default Login;
