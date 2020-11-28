import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

class EnergyType extends React.Component {
    
    render () {
        const {navigation, onChangeValue, energyType} = this.props
        return (
            <View style={styles.container}>
                <CheckBox
                center
                title="Energizing"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energyType === "energizing"}
                onPress={() => onChangeValue("energyType","energizing")}
                />
                <CheckBox
                center
                title="Live With"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energyType === "live with"}
                value="health"
                onPress={() => onChangeValue("energyType" , "live with")}
                />
                <CheckBox
                center
                title="Draining"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energyType === "draining"}
                value="relationship"
                onPress={() => onChangeValue("energyType" , "draining")}
                />
                <CheckBox
                center
                title="No energy type"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energyType === ""}
                value="relationship"
                onPress={() => onChangeValue("energyType" , "")}
                />
                <Button
                style={styles.button}
                title="Next"
                onPress={() => navigation.navigate("energyType")}
                />
            </View>
        )
    }

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