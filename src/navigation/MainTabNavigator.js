import React from "react"

import {creatBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

const MainTabNavigator = (props) => {
    const {currentUser,logoutHandler} = props

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
            <Tab.Screen name="Log Activity"/>
            <Tab.Screen name="Receive Coaching" />
            <Tab.Screen name="Input Activity" />
            <Tab.Screen name="Profile" />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;