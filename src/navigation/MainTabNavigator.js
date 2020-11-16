import React from "react"

import { StyleSheet } from "react-native";

import LoggerContainer from '../containers/LoggerContainer'
import ProfileContainer from '../containers/ProfileContainer'

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

const MainTabNavigator = (props) => {
    const {currentUser,logoutHandler,getToken} = props

    return (
        <Tab.Navigator
            initialRouteName = "Log Activity"
            // screenOptions={({ route }) => ({
            //     tabBarIcon: ({ focused, color, size }) => {
            //     let iconName;
            //     if (route.name === "Posts") {
            //         iconName = focused ? "comments" : "comments";
            //     } else if (route.name === "Account") {
            //         iconName = focused ? "user-alt" : "user";
            //     }
            //     return <FontAwesome5 name={iconName} size={size} color={color} />;
            //     },
            // })}
            // tabBarOptions={{
            //     activeTintColor: "tomato",
            //     inactiveTintColor: "gray",
            // }}
        >
            <Tab.Screen 
                name="Log Activity" component={LoggerContainer}
                children={() => (
                    <LoggerContainer currentUser={currentUser} getToken={getToken}/>
                )}
            />
            {/* <Tab.Screen name="Receive Coaching" /> */}
            {/* <Tab.Screen name="Input Activity" /> */}
            <Tab.Screen name="Profile" component={ProfileContainer}/>
        </Tab.Navigator>
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

export default MainTabNavigator;