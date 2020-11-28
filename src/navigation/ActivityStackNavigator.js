import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ActivityTitle from '../screens/ActivityScreens/ActivityTitle'
import Audible from '../screens/ActivityScreens/Audible'
import Category from '../screens/ActivityScreens/Category'
import EnergyType from '../screens/ActivityScreens/EnergyType'
import PointValue from '../screens/ActivityScreens/PointValue'
import SubActivity from '../screens/ActivityScreens/SubActivity'

const ActivityStack = createStackNavigator();

const ActivityStackNavigator = (props) => {
  const { submitActivity, onChangeText, onChangeValue, title, point_value, category, audible, energy_type } = props;

  return (
    <ActivityStack.Navigator style={styles.container} initialRouteName="ActivityTitle">
      <ActivityStack.Screen name="ActivityTitle">
        {(props) => <ActivityTitle {...props} onChangeText={onChangeText} title={title} />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="PointValue">
        {(props) => <PointValue {...props} onChangeText={onChangeText} point_value={point_value}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="Category">
        {(props) => <Category {...props} onChangeValue={onChangeValue} category={category}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="Audible">
        {(props) => <Audible {...props} onChangeValue={onChangeValue} audible={audible}  />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="EnergyType">
        {(props) => <EnergyType {...props} onChangeValue={onChangeValue} energy_type={energy_type} />} 
      </ActivityStack.Screen>
      <ActivityStack.Screen name="SubActivity">
        {(props) => <SubActivity {...props} submitActivity={submitActivity} />} 
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
