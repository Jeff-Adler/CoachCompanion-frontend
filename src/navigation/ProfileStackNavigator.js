import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import WeeklyTally from '../screens/ProfileScreens/WeeklyTally'

const ProfileStack = createStackNavigator()

const ProfileStackNavigator = (props) => {
    const {weeklyTally} = props
    return (
        <ProfileStack.Navigator style={styles.container} initialRouteName="Profile">
            <ProfileStack.Screen name="WeeklyTally">
                {(props) => <WeeklyTally {...props} 
                    weeklyTally={weeklyTally} 
                />}
            </ProfileStack.Screen>
        </ProfileStack.Navigator>
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
  
  export default ProfileStackNavigator;