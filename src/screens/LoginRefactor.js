import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

function Login() {
  const [username,setUsername]  = useState("JeffAdler")
  const [password,setPassword]  = useState("blink2002")

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
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
      <Button title="Submit" onPress={() => loginHandler(this.state)} />
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
