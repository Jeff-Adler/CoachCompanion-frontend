import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

function Audible(props) {
  const {navigation, audible, setAudible} = props

  return (
      <View style={styles.container}>
          <CheckBox
          center
          title="Audible?"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={audible === true}
          onPress={() => setAudible(!audible)}
          />
          <Button
          style={styles.button}
          title="Next"
          onPress={() => navigation.navigate("EnergyType")}
          />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // alignItems: "center",
    },
    button: {
      alignItems: "center",
      // backgroundColor: "#fff",
    },
  });

export default Audible