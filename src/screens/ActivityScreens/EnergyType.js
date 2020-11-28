import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

class EnergyType extends React.Component {
    
    render () {
        const {navigation, onChangeValue, energy_type} = this.props
        return (
            <View style={styles.container}>
                <CheckBox
                center
                title="Energizing"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energy_type === "energizing"}
                onPress={() => onChangeValue("energy_type","energizing")}
                />
                <CheckBox
                center
                title="Live With"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energy_type === "live with"}
                value="health"
                onPress={() => onChangeValue("energy_type" , "live with")}
                />
                <CheckBox
                center
                title="Draining"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energy_type === "draining"}
                value="relationship"
                onPress={() => onChangeValue("energy_type" , "draining")}
                />
                <CheckBox
                center
                title="No energy type"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={energy_type === ""}
                value="relationship"
                onPress={() => onChangeValue("energy_type" , "")}
                />
                <Button
                style={styles.button}
                title="Next"
                onPress={() => navigation.navigate("SubActivity")}
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