import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ActivityTitle from '../screens/ActivityScreens/ActivityTitle'
// import Audible from '../screens/ActivityScreens/Audible'
import Category from '../screens/ActivityScreens/Category'
// import EnergyType from '../screens/ActivityScreens/EnergyType'
import PointValue from '../screens/ActivityScreens/PointValue'
// import SubActivity from '../screens/ActivityScreens/SubActivity'

const ActivityStack = createStackNavigator();

const ActivityStackNavigator = (props) => {
  const { submitActivity, onChangeText, activityTitle, pointValue, category } = props;

  return (
    <ActivityStack.Navigator style={styles.container} initialRouteName="ActivityTitle">
      <ActivityStack.Screen name="ActivityTitle">
        {(props) => <ActivityTitle {...props} onChangeText={onChangeText} activityTitle={activityTitle} />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="PointValue">
        {(props) => <PointValue {...props} onChangeText={onChangeText} pointValue={pointValue}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="Category">
        {(props) => <Category {...props} onChangeText={onChangeText} category={category}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="Audible">
        {(props) => <Audible {...props} onChangeText={onChangeText}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="EnergyType">
        {(props) => <EnergyType {...props} onChangeText={onChangeText} />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="SubActivity">
        {(props) => <SubActivity {...props} onChangeText={onChangeText}  submitActivity={submitActivity} />} 
      </ActivityStack.Screen>
    </ActivityStack.Navigator>
  );
};

export default ActivityStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
