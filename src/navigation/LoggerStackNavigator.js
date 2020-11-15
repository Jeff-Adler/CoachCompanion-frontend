import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const LoggerStack = createStackNavigator()

const LoggerStackNavigator = (props) => {
    return (
        <LoggerStack.Navigator style={styles.container} initialRouteName="Logger">
            <LoggerStack.Screen name="Logger">

            </LoggerStack.Screen>
        </LoggerStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default LoggerStackNavigator;