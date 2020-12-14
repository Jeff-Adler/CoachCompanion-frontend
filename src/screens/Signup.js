import React, {useState} from "react";
import { Button, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

function Signup (props) {
  const { navigation, signupHandler } = props;
  const [username,setUsername]  = useState("JeffAdler")
  const [password,setPassword]  = useState("blink2002")

  const onChangeUsername = (text) => {
    setUsername(text)
  }

  const onChangePassword = (text) => {
    setPassword(text)
  }
  
  const submitSignup = () => {
    signupHandler({
      username: username,
      password: password
    });
    navigation.pop();
  };

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
      <Button title="Submit" onPress={submitSignup} />
    </View>
  );

}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
