import React from "react";

import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

class SubActivity extends React.Component {

    pressHandler = () => {
        this.props.submitActivity()
        this.props.navigation.popToTop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Create activity!" onPress={this.pressHandler}/>
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

export default SubActivity