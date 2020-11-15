import React from "react";
import { StyleSheet, View, Text } from "react-native";

class LoggerContainer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>LoggerContainer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default LoggerContainer