import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

function EnergyType (props) {
  const {navigation, energyType, setEnergyType} = this.props
  return (
      <View style={styles.container}>
          <CheckBox
          center
          title="Energizing"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === "energizing"}
          onPress={value => setEnergyType(value)}
          />
          <CheckBox
          center
          title="Live With"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === "live with"}
          value="health"
          onPress={value => setEnergyType(value)}
          />
          <CheckBox
          center
          title="Draining"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === "draining"}
          value="relationship"
          onPress={value => setEnergyType(value)}
          />
          <CheckBox
          center
          title="No energy type"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === ""}
          value="relationship"
          onPress={value => setEnergyType(value)}
          />
          <Button
          style={styles.button}
          title="Next"
          onPress={() => navigation.navigate("SubActivity")}
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

export default EnergyType