import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

class Category extends React.Component {
    
    render () {
        const {navigation, onChangeValue, category} = this.props
        return (
            <View style={styles.container}>
                <CheckBox
                center
                title="Vocation"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={category === "vocation"}
                value="vocation"
                onPress={() => onChangeValue("category","vocation")}
                />
                <CheckBox
                center
                title="Health"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={category === "health"}
                value="health"
                onPress={() => onChangeValue("category" , "health")}
                />
                <CheckBox
                center
                title="Relationship"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={category === "relationship"}
                value="relationship"
                onPress={() => onChangeValue("category" , "relationship")}
                />
                <CheckBox
                center
                title="Social"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={category === "social"}
                value="social"
                onPress={() => onChangeValue("category" , "social")}
                />
                <Button
                style={styles.button}
                title="Next"
                onPress={() => navigation.navigate("Audible")}
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

export default Category