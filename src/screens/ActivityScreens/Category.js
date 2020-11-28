import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";

class Category extends React.Component {
    state = { activity : null }
    
    render () {
        const {activity} = this.props
        return (
            <View style={styles.container}>
                <CheckBox
                center
                title="Vocation"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={activity === "vocation"}
                value="vocation"
                // onPress={this.malePressHandler}
                />
                <CheckBox
                center
                title="Health"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={activity === "health"}
                value="health"
                // onPress={this.femalePressHandler}
                />
                <CheckBox
                center
                title="Relationship"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={activity === "relationship"}
                value="relationship"
                // onPress={this.otherPressHandler}
                />
                <CheckBox
                center
                title="Social"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={activity === "social"}
                value="social"
                // onPress={this.otherPressHandler}
                />
                <Button
                style={styles.button}
                title="Next"
                onPress={this.submitHandler}
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