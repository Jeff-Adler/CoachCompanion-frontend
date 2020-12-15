import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

function EnergyType (props) {
  const {navigation, energyType, setEnergyType} = props

  const handleEnergyTypeChange = (selectedEnergyType) => {
    setEnergyType(selectedEnergyType)
  }
  return (
      <View style={styles.container}>
          <CheckBox
          center
          title="Energizing"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === "energizing"}
          onPress={() => handleEnergyTypeChange("energizing")}
          />
          <CheckBox
          center
          title="Live With"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === "live with"}
          onPress={() => handleEnergyTypeChange("live with")}
          />
          <CheckBox
          center
          title="Draining"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === "draining"}
          onPress={() => handleEnergyTypeChange("draining")}
          />
          <CheckBox
          center
          title="No energy type"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={energyType === ""}
          onPress={() => handleEnergyTypeChange("")}
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