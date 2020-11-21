import React from "react";

import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

class SubmitActivity extends React.Component {

    pressHandler = () => {
        this.props.logActivity()
        this.props.navigation.popToTop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Submit activity!" onPress={this.pressHandler}/>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
      justifyContent: "center",
    },
  });

export default SubmitActivity