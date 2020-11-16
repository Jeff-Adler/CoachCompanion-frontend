import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ActivitySelection from '../screens/LoggerScreens/ActivitySelection'

const LoggerStack = createStackNavigator()

const LoggerStackNavigator = (props) => {
    const {activities} = props
    return (
        <LoggerStack.Navigator style={styles.container} initialRouteName="Logger">
            <LoggerStack.Screen name="Logger">
                {(props) => <ActivitySelection {...props} activities={activities} />}
            </LoggerStack.Screen>
                {/* <LoggerStack.Screen name="Login">
                    {(props) => <ActivitySelection {...props}/>}
                </LoggerStack.Screen> */}
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